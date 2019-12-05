import { BoardA } from "../Boards/BoardA";
import { IActor } from "./IActor";
import { injectable } from "inversify";

@injectable()
export class WindowLamp implements IActor
{
    constructor(private driver: BoardA)
    { }

    SetLightPercent(valuePercent: number): void
    {
        const pwm = valuePercent  * 10;
        // console.log('pwm', pwm);
        this.driver.IO.Pwm2.Value = pwm >= 1024 ? 1024 : pwm;
    }
}