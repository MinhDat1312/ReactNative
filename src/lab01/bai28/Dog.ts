import { AnimalProtected } from "./Animal";

export class DogProtected extends AnimalProtected {
    protected makeSound(): void {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
}