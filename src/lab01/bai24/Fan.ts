import { Appliance } from "./Appliance";

export class Fan extends Appliance {
    turnOn(): void {
        console.log(`${this.brand} fan is now spinning!`);
    }
}