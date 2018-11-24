import { BoardB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";

@injectable()
export class DoorPanel implements IActor
{
    constructor(private driver: BoardB)
    { 
        this.driver.IO.Input1.OnFalling(() => this.lightsSwitch.next(true));
        this.driver.IO.Input2.OnFalling(() => this.delayedOff.next(true));
    }
    
    public get OnMainLampButtonPress(): Rx.Subject<boolean>
    {
        return this.lightsSwitch;
    }

    public get OnMainLampDelayedOffButtonPress(): Rx.Subject<boolean>
    {
        return this.delayedOff;
    }

    private lightsSwitch = new Rx.Subject<boolean>();
    private delayedOff = new Rx.Subject<boolean>();
}
