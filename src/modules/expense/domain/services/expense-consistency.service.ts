import { ExpensePayment } from '@expense/domain/entities/expense-payment.entity';
import { ExpenseShare } from '@expense/domain/entities/expense-share.entity';

export class ExpenseConsistencyService {

    validate(amount: number, shares: ExpenseShare[], payments: ExpensePayment[]) {

        const sharesTotal = shares.reduce((s, x) => s + x.amount, 0);
        const paymentsTotal = payments.reduce((s, x) => s + x.amount, 0);

        if (Math.abs(sharesTotal - amount) > 0.01) {
            throw new Error('Shares mismatch');
        }

        if (Math.abs(paymentsTotal - amount) > 0.01) {
            throw new Error('Payments mismatch');
        }
    }
}