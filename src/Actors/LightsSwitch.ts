import { DriverB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";

@injectable()
export class LightsSwitch implements IActor
{
    constructor(private driver: DriverB)
    { 
        this.driver.IO.Input1.OnFalling(() => this.lightsSwitch.next(true));
        this.driver.IO.Input2.OnFalling(() => this.delayedOff.next(true));
    }
    
    public get OnPress(): Rx.Subject<boolean>
    {
        return this.lightsSwitch;
    }

    public get OnDelayedOffPress(): Rx.Subject<boolean>
    {
        return this.delayedOff;
    }

    private lightsSwitch = new Rx.Subject<boolean>();
    private delayedOff = new Rx.Subject<boolean>();
}
