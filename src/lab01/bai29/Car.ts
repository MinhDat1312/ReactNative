import { Movable } from "./Movable";

export class CarMovable implements Movable {
    constructor(public brand: string, public speed: number) {}

    move(): void {
        console.log(`${this.brand} car is moving at ${this.speed} km/h.`);
    }
}