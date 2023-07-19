import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BankAccountsRepository } from './repositories/bank-accounts.repository';
import { CategoriesRepository } from './repositories/categories.repositories';
import { UserRepository } from './repositories/user.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    BankAccountsRepository,
    CategoriesRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    BankAccountsRepository,
    CategoriesRepository,
  ],
})
export class DatabaseModule {}
