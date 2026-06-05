import { Injectable } from "@nestjs/common";
import { CreateExpenseDto } from "./dto/create-expense.dto";
import { ExpenseValidator } from "./domain/expense.validator";
import { ExpenseFactory } from "./domain/expense.factory";

@Injectable()
export class ExpenseService {

    async createExpense(dto: CreateExpenseDto, userId: string) {
        
        // 1. validate business rules
        ExpenseValidator.validateAmount(dto.amount);

        // 2. create domain object
        const expense = ExpenseFactory.create({
            title: dto.title,
            amount: dto.amount,
            householdId: dto.householdId,
            createdBy: userId,
        });
        
        // 3. call repository
        // await this.expenseRepository.save(expense);

        return expense;
    }

}