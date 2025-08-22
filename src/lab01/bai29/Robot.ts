import { Movable } from "./Movable";

export class Robot implements Movable {
    constructor(public id: string) {}

    move(): void {
        console.log(`Robot ${this.id} is walking forward.`);
    }
}