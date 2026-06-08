import { Expense } from "@expense/domain/entities/expense.entity";

export interface ExpenseRepository {

    save(expense: Expense): Promise<Expense>;

    findById(id: string): Promise<Expense | null>;

    findByHouseholdId(householdId: string): Promise<Expense[]>;

    delete(id: string): Promise<void>;

}
