import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

interface IRequest extends Request {
  userId: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  async me(@Req() req: IRequest) {
    console.log(req.userId);

    return this.usersService.getUserById('user');
  }
}
