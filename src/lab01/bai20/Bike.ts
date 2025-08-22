import { Vehicle } from "./Vehicle";

export class BikeMore implements Vehicle {
    constructor(public brand: string, public speed: number) {}

    drive(): void {
        console.log(`${this.brand} bike is riding at ${this.speed} km/h.`);
    }

    stop(): void {
        console.log(`${this.brand} bike has stopped.`);
    }
}