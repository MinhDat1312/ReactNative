export class Employee {
  constructor(public name: string, public salary: number) {}

  getDetails(): void {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}