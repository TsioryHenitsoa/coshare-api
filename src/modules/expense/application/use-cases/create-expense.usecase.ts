import { ExpenseRepository } from '@expense/application/ports/expense.repository';
import { CategoryRuleProvider } from '@expense/domain/services/category-rule.provider';
import { CategoryRulesService } from '@expense/domain/services/category-rules.service';
import { ExpenseConsistencyService } from '@expense/domain/services/expense-consistency.service';
import { CreateExpenseInput } from '@expense/application/contracts/create-expense.input';
import { ExpenseFactory } from '@expense/domain/factories/expense.factory';

export class CreateExpenseUseCase {
  constructor(
    private readonly repo: ExpenseRepository,
    private readonly ruleProvider: CategoryRuleProvider,
    private readonly rulesService: CategoryRulesService,
    private readonly validator: ExpenseConsistencyService,
  ) {}

  async execute(input: CreateExpenseInput) {

    const rule = this.ruleProvider.getRule(input.householdId, input.categoryId);

    const shares = this.rulesService.generateShares(input.amount, input.participants, rule);

    const payments = input.payments;

    this.validator.validate(input.amount, shares, payments);

    const expense = ExpenseFactory.create({
      id: crypto.randomUUID(),
      householdId: input.householdId,
      createdBy: input.createdBy,
      title: input.title,
      amount: input.amount,
      categoryId: input.categoryId,
      payments,
      shares,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.repo.save(expense);
  }
}