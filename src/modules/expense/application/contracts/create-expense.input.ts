import { ExpenseParticipant } from './expense-participant';

export type CreateExpenseInput = {
  householdId: string;
  title: string;
  amount: number;
  categoryId: string | null;
  createdBy: string;
  payments: { userId: string; amount: number }[];
  participants: ExpenseParticipant[];
};