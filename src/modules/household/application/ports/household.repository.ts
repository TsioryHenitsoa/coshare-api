import { Household } from '@household/domain/entities/household.entity';

export interface HouseholdRepository {

    save(household: Household): Promise<Household>;

    findById(id: string): Promise<Household | null>;

}