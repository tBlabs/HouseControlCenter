import { IFlow } from "./IFlow";
import { injectable } from "inversify";
import { AirSensor } from "../Actors/AirSensor";
import { AirDisplay } from "../Actors/AirDisplay";
import { AirPurifier } from "../Actors/AirPurifier";

@injectable()
export class AirFlow implements IFlow
{
    constructor(
        private _airSensor: AirSensor,
        private _airDisplay: AirDisplay,
        private _airPurifier: AirPurifier)
    { }

    public Init(): void
    {
        this._airSensor.OnLevelChange(pm10 =>
        {
            this._airDisplay.Print(pm10);

            if (pm10 > 40)
            {
                this._airPurifier.On();
            }
            else if (pm10 < 30)
            {
                this._airPurifier.Off();
            }
        });
    }
}
