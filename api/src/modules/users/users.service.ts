import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { defaultCategories } from 'src/shared/data/default-categories';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailTaken = await this.userRepository.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.userRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
        categories: {
          createMany: { data: defaultCategories },
        },
      },
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}
