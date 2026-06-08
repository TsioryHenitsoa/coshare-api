import { CategoryRule } from './category-rules.service';

export class CategoryRuleProvider {

    getRule(householdId: string, categoryId: string | null): CategoryRule {

        if (!categoryId) {
            return this.defaultRule();
        }

        return this.categoryRule(householdId, categoryId);
    }

    private defaultRule(): CategoryRule {
        return {
            type: 'EQUAL',
            config: null,
        };
    }

    private categoryRule(householdId: string, categoryId: string): CategoryRule {
        return {
            type: 'EQUAL',
            config: null,
        };
    }
}