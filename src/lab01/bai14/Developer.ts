import { Employee } from "./Employee";

export class Developer extends Employee {
  constructor(name: string, salary: number, public programmingLanguage: string) {
    super(name, salary);
  }

  writeCode(): void {
    console.log(`${this.name} is writing ${this.programmingLanguage} code.`);
  }
}