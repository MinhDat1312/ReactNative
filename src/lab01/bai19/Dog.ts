import { AnimalMore } from "./Animal";

export class DogMore extends AnimalMore {
  makeSound(): void {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}