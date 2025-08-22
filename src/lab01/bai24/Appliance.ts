export abstract class Appliance {
    constructor(public brand: string) {}

    abstract turnOn(): void;
}