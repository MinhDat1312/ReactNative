export class AnimalProtected {
    constructor(public name: string) {}

    protected makeSound(): void {
        console.log(`${this.name} makes a generic animal sound.`);
    }

    public speak(): void {
        this.makeSound();
    }
}