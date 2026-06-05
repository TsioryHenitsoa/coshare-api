export class ExpenseValidator {
    static validateAmount(amount: number){
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }
    }
}