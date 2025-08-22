import { Person } from "./bai01";

export class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    introduce(): void {
        console.log(`Hello, I'm ${this.name}, a ${this.age}-year-old teacher of ${this.subject}.`);
    }
}