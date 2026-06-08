import { ExpensePayment } from './expense-payment.entity';
import { ExpenseShare } from './expense-share.entity';

export class Expense {
    constructor(
        public readonly id: string,
        public readonly householdId: string,
        public readonly createdBy: string,

        public title: string,
        public amount: number,

        public categoryId: string | null,

        public payments: ExpensePayment[],
        public shares: ExpenseShare[],

        public createdAt: Date,
        public updatedAt: Date,
    ) {
        this.assertInvariants();
    }

    private assertInvariants(): void {
        if (this.amount <= 0) throw new Error('Amount invalid');
        if (!this.shares?.length) throw new Error('Shares required');
        if (!this.payments?.length) throw new Error('Payments required');
    }
}
