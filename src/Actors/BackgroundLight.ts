import { BoardA } from "../Boards/BoardA";
import { IActor } from "./IActor";
import { injectable } from "inversify";

@injectable()
export class BackgroundLight implements IActor
{
    constructor(private driver: BoardA)
    { }

    TurnOnForSomeTime(): void
    {
        this.driver.IO.Pwm1.Value = this.driver.IO.Pwm1.MaxValue;
        let pwm = this.driver.IO.Pwm1.MaxValue;
        
        const timer = setInterval(() =>
        {
            this.driver.IO.Pwm1.Value = pwm;
            pwm -= 1;
            if (pwm <= 0) clearInterval(timer);
        }, 200);
    }
}