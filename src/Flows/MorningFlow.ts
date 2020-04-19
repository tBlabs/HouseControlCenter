import { IFlow } from "./IFlow";
import { injectable } from "inversify";
import { Clock } from "../Helpers/Clock/Clock";
import { MusicPlayer } from "../Actors/MusicPlayer";
import { Moment } from "../Helpers/Clock/Moment";
import { Time } from "../Helpers/Clock/Time";
import { Day } from "../Helpers/Clock/Day";

@injectable()
export class MorningFlow implements IFlow
{
    constructor(
        private _clock: Clock,
        private _music: MusicPlayer)
    { }

    public Init(): void
    {
        const wakeUpTime = new Moment(new Time(9, 0), [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday]);

        this._clock.At(wakeUpTime, async ()=>{
         
            await this._music.Play("morning.list");
        });
    }
}
