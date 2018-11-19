import { IFlow } from "./IFlow";
import { LightsSwitch } from "../Actors/LightsSwitch";
import { Lights } from "../Actors/Lights";
import { injectable } from "inversify";
import { Delay } from "../Helpers/DelayHelper";
import { BoardB } from "../Boards/BoardB";
import { BoardC } from "../Boards/BoardC";

@injectable()
export class TestFlow implements IFlow
{
    constructor(
        private _boardB: BoardB,
        private _boardC: BoardC,
        private _delay: Delay)
    { }

    public Init(): void
    {
        console.log(TestFlow.name);
        this._boardC.IO.Adc1.OnChange((adc1) =>
        {
            this._boardC.IO.Display1.Value = adc1.Current.Value;
            this._boardB.IO.Pwm4.Value = adc1.Current.Value;
        }
    }
}