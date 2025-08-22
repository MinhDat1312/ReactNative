import { Flyable } from "./bai12";

export class Bird implements Flyable {
  constructor(public name: string) {}

  fly(): void {
    console.log(`${this.name} is flying high in the sky!`);
  }
}