import { Household } from '@household/domain/entities/household.entity';
import { HouseholdRepository } from '@household/application/ports/household.repository';
import { CreateHouseholdInput } from '@household/application/contracts/create-household.input';


export class CreateHouseholdUseCase {
    constructor(
        private readonly repo: HouseholdRepository,
    ) { }

    async execute(input: CreateHouseholdInput) {
        const household = new Household(
            crypto.randomUUID(),
            input.name,
            input.currency,
            new Date(),
            new Date(),
        );
        return this.repo.save(household);
    }
}