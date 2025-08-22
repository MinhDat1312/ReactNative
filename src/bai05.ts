export class BankAccount {
    balance: number

    constructor(balance: number) {
        this.balance = balance
    }

    view(): string {
        return `Balance: ${this.balance}`
    }

    deposit(price: number): void {
        this.balance = this.balance + price
    }

    withdraw(price: number): void {
        if(this.balance > 0) {
            if(this.balance >= price) {
                this.balance = this.balance - price
            }
        }
    }
}