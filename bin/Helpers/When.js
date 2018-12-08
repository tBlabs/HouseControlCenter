"use strict";
// import * as Rx from "rxjs";
// import { DateTimeProvider } from "../services/DateTimeProvider/DateTimeProvider";
// import { Repeater, IRepeater } from "../services/repeater/Repeater";
// import { IDateTimeProvider } from "./IDateTimeProvider";
// export enum TimeTo
// {
//     WakeUp = "WakeUp",
//     Sleep = "Sleep",
//     BackHome = "BackHome"
// }
// export enum Day
// {
//     Monday,
//     Thursday,
//     Wednesday
// }
// export class Time
// {
//     constructor(
//         public Hour: number,
//         public Minute: number)
//     { }
// }
// export class Moment
// {
//     constructor(
//         public Name: TimeTo,
//         public Days: Day[],
//         public Time: Time)
//     { }
//     public IsItNow(now: Date)
//     {
//         return this.Days.includes(now.getDay()) && this.Time.Hour === now.getHours() && this.Time.Minute === now.getMinutes();
//     }
// }
// export class WhenConfig implements IWhenConfig
// {
//     public get Moments(): Moment[]
//     {
//         return [
//             new Moment(TimeTo.WakeUp, [Day.Monday, Day.Thursday, Day.Wednesday], new Time(7, 30))
//         ];
//     }
//     public FindByName(momentName: TimeTo): Moment
//     {
//         const moment: Moment | undefined = this.Moments.find(m => m.Name === momentName);
//         if (moment === undefined) throw new Error('Moment not found');
//         return moment;
//     }
// }
// eexport type Action = () => void;
// export class MomentActions
// {
//     private momentsToActionsDict: { [key: string]: Action[] } = {};
//     public Add(timeTo: TimeTo, callback: Action): void
//     {
//         if (!Array.isArray(this.momentsToActionsDict[timeTo]))
//         {
//             this.momentsToActionsDict[timeTo] = [];
//         }
//         this.momentsToActionsDict[timeTo].push(callback);
//     }
//     public CallActions(m: TimeTo): void
//     {
//         this.momentsToActionsDict[m].forEach(c => c());
//     }
//     public get MomentsNames(): TimeTo[]
//     {
//         return Object.keys(this.momentsToActionsDict) as TimeTo[];
//     }
//     public GetActions(momentName: TimeTo): Action[]
//     {
//         return this.momentsToActionsDict[momentName];
//     }
// }
// export interface IWhenConfig
// {
//     FindByName(m: TimeTo): Moment;
//     Moments: Moment[];
// }
// // export interface IWhen
// // {
// //     ItIs(timeTo: TimeTo, callback: () => void): void;
// // }
// export class When //implements IWhen, ICheckMoments
// {
//     private momentsActions: MomentActions = new MomentActions();
//     constructor(
//         private _dateTimeProvider: IDateTimeProvider,
//         private _config: IWhenConfig)
//     { }
//     public CheckMoments(): void
//     {
//         this.momentsActions.MomentsNames.forEach((m: TimeTo) =>
//         {
//             const moment: Moment = this._config.FindByName(m);
//             if (moment.IsItNow(this._dateTimeProvider.Now))
//             {
//                 this.momentsActions.CallActions(m);
//             }
//         });
//     }
//     public ItIs(timeTo: TimeTo, callback: () => void): void
//     {
//         this.momentsActions.Add(timeTo, callback);
//     }
// }
//# sourceMappingURL=When.js.map