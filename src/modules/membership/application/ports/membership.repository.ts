export interface MembershipRepository {
    exists(userId: string, householdId: string): Promise<boolean>;
}