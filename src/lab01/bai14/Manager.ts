import { Employee } from "./Employee";

export class Manager extends Employee {
  constructor(name: string, salary: number, public teamSize: number) {
    super(name, salary);
  }

  conductMeeting(): void {
    console.log(`${this.name} is conducting a meeting with ${this.teamSize} team members.`);
  }
}