import { MembershipRepository } from "@membership/application/ports/membership.repository";

export class MembershipValidationService {
    constructor(private readonly repo: MembershipRepository) {}

    async assertUsersBelongToHousehold(userIds: string[], householdId: string) {
        for (const userId of userIds) {
            const exists = await this.repo.exists(userId, householdId);
            if (!exists) {
                throw new Error(`User ${userId} does not belong to household ${householdId}`);
            }
        }
    }
}    