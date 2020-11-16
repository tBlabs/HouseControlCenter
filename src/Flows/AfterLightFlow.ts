import { IFlow } from "./IFlow";
import { injectable } from "inversify";
import { AirDisplay } from "../Actors/AirDisplay";
import { LightSensor } from "../Actors/LightSensor";
import { BackgroundLight } from "../Actors/BackgroundLight";
import { InternalIO } from "../Boards/InternalIO";
import { Lamp } from "../Actors/Lamp";
import { Sequencer } from "../Utils/Sequencer";

@injectable()
export class AfterLightFlow implements IFlow
{
    constructor(
        private _io: InternalIO,
        private _lamp: Lamp)
    { }

    public Init(): void
    {
        let seq = new Sequencer();
        seq.Range(1, 150, 5, 15)
            .Step(150, 3000)
            .Range(150, 1, 1, 50)
            .Step(0, 0);

        seq.OnChange = async (v) =>
        {
            this._lamp.SetPower(v);
        }

        this._io.OnInput1Change = (s) =>
        {
            if (s)
                seq.Start();
            else seq.Break(0);
        }
    }
}
