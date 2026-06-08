import { ExpenseParticipant } from '@expense/application/contracts/expense-participant';

export type CategoryRule = {
    type: 'EQUAL' | 'WEIGHT' | 'PERCENT';
    config: Record<string, number> | null;
};

export class CategoryRulesService {

    generateShares(
        amount: number,
        participants: ExpenseParticipant[],
        rule: CategoryRule,
    ) {
        switch (rule.type) {

            case 'EQUAL':
                return this.equalSplit(amount, participants);

            case 'WEIGHT':
                return this.weightSplit(amount, participants);

            case 'PERCENT':
                return this.percentSplit(amount, participants, rule.config);

            default:
                throw new Error('Unknown category rule type');
        }
    }

    private equalSplit(amount: number, participants: ExpenseParticipant[]) {
        const share = amount / participants.length;

        return participants.map(p => ({
            userId: p.userId,
            amount: share,
        }));
    }

    private weightSplit(amount: number, participants: ExpenseParticipant[]) {
        const totalWeight = participants.reduce((sum, p) => sum + (p.weight ?? 1), 0);

        return participants.map(p => ({
            userId: p.userId,
            amount: (amount * (p.weight ?? 1)) / totalWeight,
        }));
    }

    private percentSplit(
        amount: number,
        participants: ExpenseParticipant[],
        config: Record<string, number> | null,
    ) {
        return participants.map(p => ({
            userId: p.userId,
            amount: (amount * (config?.[p.userId] ?? 0)) / 100,
        }));
    }
}