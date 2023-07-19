import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { BankAccountTypeEnum } from '../entities/bank-account-type.enum';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsEnum(BankAccountTypeEnum)
  @IsNotEmpty()
  type: BankAccountTypeEnum;

  @IsString()
  @IsHexColor()
  @IsNotEmpty()
  color: string;
}
