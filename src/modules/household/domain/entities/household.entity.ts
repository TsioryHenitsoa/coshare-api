export class Household {
    constructor(
        public id: string,
        public name: string,
        public currency: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {
        this.assertInvariants();
    }

    private assertInvariants() {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error('Household name is required');
        }

        if (!this.currency || this.currency.length !== 3) {
            throw new Error('Currency must be ISO code');
        }
    }
}