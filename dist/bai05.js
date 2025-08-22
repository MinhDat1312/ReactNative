"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    view() {
        return `Balance: ${this.balance}`;
    }
    deposit(price) {
        this.balance = this.balance + price;
    }
    withdraw(price) {
        if (this.balance > 0) {
            if (this.balance >= price) {
                this.balance = this.balance - price;
            }
        }
    }
}
exports.BankAccount = BankAccount;
