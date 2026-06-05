import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
    @IsNotEmpty({ message: "title is required" })
    @IsString({ message: "title must be a string" })
    title!: string;

    @IsNotEmpty({ message: "amount is required" })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: "amount must be a valid number" })
    amount!: number;

    @IsNotEmpty({ message: "householdId is required" })
    @IsString({ message: "householdId must be a string" })
    householdId!: string;
}