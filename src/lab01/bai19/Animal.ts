export class AnimalMore {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a generic animal sound.`);
  }
}