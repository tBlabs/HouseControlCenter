import { IFlow } from "./IFlow";
import { injectable } from "inversify";
import { AirDisplay } from "../Actors/AirDisplay";
import { LightSensor } from "../Actors/LightSensor";
import { BackgroundLight } from "../Actors/BackgroundLight";

@injectable()
export class AfterLightFlow implements IFlow
{
    constructor(
        private _lightSensor: LightSensor,
        private _backgroundLight: BackgroundLight,
        private _airDisplay: AirDisplay)
    { }

    private allow = false;

    public Init(): void
    {
        this._lightSensor.OnChange(level =>
        {
            // this._airDisplay.Print(level);

            if (this.allow && (level < 20))
            {
                this.allow = false;

                this._backgroundLight.TurnOnForSomeTime();
            }

            if (level > 50)
            {
                this.allow = true;
            } 
        });
    }
}
