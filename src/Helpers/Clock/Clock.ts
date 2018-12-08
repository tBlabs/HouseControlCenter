import { IRepeater } from "../../services/repeater/Repeater";
import { IDateTimeProvider } from "../../services/DateTimeProvider/IDateTimeProvider";
import { Action } from "./Action";
import { Moment } from "./Moment";
import { injectable, inject } from "inversify";
import { Types } from "../../IoC/Types";

@injectable()
export class Clock
{
    constructor(
        @inject(Types.IRepeater) private _repeater: IRepeater,
        @inject(Types.IDateTimeProvider) private _dateTimeProvider: IDateTimeProvider)
    { }

    public At(moment: Moment, callback: (moment: Moment)=>void): void
    {
        this._repeater.EveryMinute(() =>
        {
            if (moment.IsItNow(this._dateTimeProvider.Now))
            {
                callback(moment);
            }
        });
    }
}