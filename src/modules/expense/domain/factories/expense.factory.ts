import { Expense } from '@expense/domain/entities/expense.entity';
import { ExpenseShare } from '@expense/domain/entities/expense-share.entity';
import { ExpensePayment } from '@expense/domain/entities/expense-payment.entity';

export class ExpenseFactory {
    static create(
        input: {
            id: string;
            householdId: string;
            createdBy: string;
            title: string;
            amount: number;
            categoryId: string | null;
            payments: ExpensePayment[];
            shares: ExpenseShare[];
            createdAt: Date;
            updatedAt: Date;
        }
    ): Expense {
        return new Expense(
            input.id,
            input.householdId,
            input.createdBy,
            input.title,
            input.amount,
            input.categoryId,
            input.payments,
            input.shares,
            input.createdAt,
            input.updatedAt,
        );
    }
}