import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  BankAccountsRepository,
  CategoriesRepository,
  TransactionsRepository,
  UserRepository,
} from './repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    BankAccountsRepository,
    CategoriesRepository,
    TransactionsRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    BankAccountsRepository,
    CategoriesRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
