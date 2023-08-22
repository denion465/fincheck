import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { TransactionTypeEnum } from '../entities/transaction-type.enum';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  bankAccountId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsEnum(TransactionTypeEnum)
  type: TransactionTypeEnum;
}
