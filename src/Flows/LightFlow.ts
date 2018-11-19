import { IFlow } from "./IFlow";
import { LightsSwitch } from "../Actors/LightsSwitch";
import { Lights } from "../Actors/Lights";
import { injectable } from "inversify";
import { Delay } from "../Helpers/DelayHelper";

@injectable()
export class LightFlow implements IFlow
{
    constructor(
        private _lightsSwitch: LightsSwitch,
        private _lights: Lights,
        private _delay: Delay)
    { }

    public Init(): void
    {
        this._lightsSwitch.OnPress.subscribe(() =>
        {
            this._lights.Toggle();
        });

        this._lightsSwitch.OnDelayedOffPress.subscribe(() =>
        {
            if (this._lights.IsOff())
            {
                this._delay.FiveSeconds(() =>
                {
                    this._lights.Off();
                });
            }
        });
    }
}