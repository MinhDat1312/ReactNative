import { AnimalProtected } from "./Animal";

export class CatProtected extends AnimalProtected {
    protected makeSound(): void {
        console.log(`${this.name} meows: Meow!`);
    }
}