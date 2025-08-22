import { Vehicle } from "./Vehicle";

export class CarMore implements Vehicle {
    constructor(public brand: string, public speed: number) {}

    drive(): void {
        console.log(`${this.brand} car is driving at ${this.speed} km/h.`);
    }

    stop(): void {
        console.log(`${this.brand} car has stopped.`);
    }
}