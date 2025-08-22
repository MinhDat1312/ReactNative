import { Appliance } from "./Appliance";

export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log(`${this.brand} air conditioner is cooling the room!`);
    }
}