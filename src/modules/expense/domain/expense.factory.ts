export class ExpenseFactory {
    static create(input: {
        title: string;
        amount: number;
        householdId: string;
        createdBy: string;
    }) {
        return {
            id: crypto.randomUUID(),
            title: input.title,
            amount: input.amount,
            householdId: input.householdId,
            createdBy: input.createdBy,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }
}
