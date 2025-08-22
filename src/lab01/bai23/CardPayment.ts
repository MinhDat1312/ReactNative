import { Payment } from "./Payment";

export class CardPayment implements Payment {
    constructor(private cardNumber: string) {}

    pay(amount: number): void {
        console.log(`Paid $${amount} using card ending with ${this.cardNumber.slice(-4)}.`);
    }
}