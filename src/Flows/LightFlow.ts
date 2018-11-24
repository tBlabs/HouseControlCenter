import { IFlow } from "./IFlow";
import { DoorPanel } from "../Actors/LightsSwitch";
import { Lights } from "../Actors/Lights";
import { injectable } from "inversify";
import { Delay } from "../Helpers/DelayHelper";
import { BedPanel } from "../Actors/BedPanel";

@injectable()
export class LightFlow implements IFlow
{
    constructor(
        private _doorPanel: DoorPanel,
        private _bedPanel: BedPanel,
        private _lights: Lights,
        private _delay: Delay)
    { }

    public Init(): void
    {
        this._bedPanel.OnButton1Press.subscribe(() =>
        {
            this._lights.Toggle();
        });

        this._doorPanel.OnMainLampButtonPress.subscribe(() =>
        {
            this._lights.Toggle();
        });

        this._doorPanel.OnMainLampDelayedOffButtonPress.subscribe(() =>
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