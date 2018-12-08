import { IFlow } from "./IFlow";
import { DoorPanel } from "../Actors/LightsSwitch";
import { Lights } from "../Actors/Lights";
import { injectable } from "inversify";
import { DeskPanel } from "../Actors/DeskPanel";
import { Clock } from "../Helpers/Clock/Clock";
import { Moment } from "../Helpers/Clock/Moment";
import { Time } from "../Helpers/Clock/Time";
import { Day } from "../Helpers/Clock/Day";

@injectable()
export class LightFlow implements IFlow
{
    constructor(
        private _doorPanel: DoorPanel,
        private _deskPanel: DeskPanel,
        private _lights: Lights,
        private _clock: Clock)
    { }

    public Init(): void
    {
        const mondayToFriday = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];
        const wakeUpMoment = new Moment(new Time(7, 30), mondayToFriday);

        this._clock.At(wakeUpMoment, () =>
        {
            this._lights.OnForOneHour();
        });

        this._deskPanel.OnButton1Press.subscribe(() =>
        {
            this._lights.NextLevel();
        });

        this._doorPanel.OnMainLampButtonPress.subscribe(() =>
        {
            this._lights.Toggle();
        });

        this._doorPanel.OnMainLampDelayedOffButtonPress.subscribe(() =>
        {
            this._lights.OffWithDelay(15);
        });
    }
}