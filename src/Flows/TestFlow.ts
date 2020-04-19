import { IFlow } from "./IFlow";
import { injectable } from "inversify";
import { Delay } from "../Helpers/DelayHelper";
import { BoardB } from "../Boards/BoardB";
import { BoardC } from "../Boards/BoardC";
import { BoardA } from "../Boards/BoardA";
import { Clock } from "../Helpers/Clock/Clock";
import { Moment } from "../Helpers/Clock/Moment";
import { Time } from "../Helpers/Clock/Time";
import { Day } from "../Helpers/Clock/Day";

@injectable()
export class TestFlow implements IFlow
{
    constructor(
        private _boardA: BoardA,
        private _boardB: BoardB,
        private _boardC: BoardC,
        private _clock: Clock,
        private _delay: Delay)
    { }

    public Init(): void
    {
        // this._clock.At(new Moment(new Time(15, 4), [Day.Saturday]), (m)=>{
        //     console.log(m);
        // });
        // this._boardA.IO.Input1.OnFalling((s) => this._boardA.IO.Output2.Toggle());
        // this._boardA.IO.Input2.OnFalling((s) => this._boardA.IO.Output3.Toggle());
        // this._boardA.IO.Input5.OnFalling((s) => this._boardA.IO.Output4.Toggle());
        // this._boardA.IO.Input6.OnFalling((s) => this._boardA.IO.Output5.Toggle());
        // this._boardA.IO.Adc1.OnChange(a => this._boardA.IO.Pwm1.Value = a.Current.Value);
        // this._boardA.IO.Adc2.OnChange(a => this._boardA.IO.Pwm2.Value = a.Current.Value);

    //     let t = 0;
    //     let cc = 0;

    //     this._boardC.IO.Adc1.OnChange(s =>
    //     {
    //         if (s.Current.Value > 50)
    //         {
    //             cc = 1;
    //             // this._boardA.IO.Pwm2.Value=t*100 < 1000 ? t*100 : 1000;
    //             this._boardA.IO.Pwm2.Value = this._boardA.IO.Pwm2.MaxValue;
    //         }
    //         else 
    //         {
    //             cc = 0;
    //             this._boardA.IO.Pwm2.Value = 0;
    //         }
    //     }); 

    //     this._boardC.IO.Display1.Dot = 2;

    //     setInterval(() =>
    //     {
    //         if (cc)
    //         {
    //             this._boardA.IO.Output5.On();
    //             t++;
    //             if (t >= 9999) t = 0;
    //             this._boardC.IO.Display1.Value = t;
    //         }
    //         else
    //         {
    //             t = 0;
    //             this._boardA.IO.Output5.Off();
    //         }
    //     }, 100);
    }
}
