import { IFlow } from "./IFlow";
import { DoorPanel } from "../Actors/LightsSwitch";
import { Lights } from "../Actors/Lights";
import { injectable } from "inversify";
import { Delay } from "../Helpers/DelayHelper";
import { BoardB } from "../Boards/BoardB";
import { BoardC } from "../Boards/BoardC";
import { BoardA } from "../Boards/BoardA";

@injectable()
export class TestFlow implements IFlow
{
    constructor(
        private _boardA: BoardA,
        private _boardB: BoardB,
        private _boardC: BoardC,
        private _delay: Delay)
    { }

    public Init(): void
    {
        this._boardA.IO.Input1.OnFalling((s) => this._boardA.IO.Output2.Toggle());
        this._boardA.IO.Input2.OnFalling((s) => this._boardA.IO.Output3.Toggle());
        this._boardA.IO.Input5.OnFalling((s) => this._boardA.IO.Output4.Toggle());
        this._boardA.IO.Input6.OnFalling((s) => this._boardA.IO.Output5.Toggle());
        this._boardA.IO.Adc1.OnChange(a => this._boardA.IO.Pwm1.Value = a.Current.Value);
        this._boardA.IO.Adc2.OnChange(a => this._boardA.IO.Pwm2.Value = a.Current.Value);
        
        // this._boardC.IO.Adc1.OnChange((adc1) =>
        // {
        //     this._boardC.IO.Display1.Value = adc1.Current.Value;
        //     this._boardB.IO.Pwm4.Value = adc1.Current.Value;
        // });
    }
}