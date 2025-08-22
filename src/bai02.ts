import { Person } from "./bai01"

export class Student extends Person {
    grade: number

    constructor (name: string, age: number, grade: number) {
        super(name, age)
        this.grade = grade
    }

    displayAllInfo (): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}