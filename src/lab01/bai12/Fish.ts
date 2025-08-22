import { Swimmable } from "./bai12";

export class Fish implements Swimmable {
  constructor(public name: string) {}

  swim(): void {
    console.log(`${this.name} is swimming in the water!`);
  }
}