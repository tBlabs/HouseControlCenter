import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";
import { BoardA } from "../Boards/BoardA";

@injectable()
export class MainPanel implements IActor
{
    private button1 = new Rx.Subject<boolean>();
    private button2 = new Rx.Subject<boolean>();
    private adc1 = new Rx.Subject<number>();

    constructor(private driver: BoardA)
    {
        // this.driver.IO.Input1.OnFalling(() => this.button1.next(true));
        // this.driver.IO.Input2.OnFalling(() => this.button2.next(true));
        // let adc1prevVal = 0; 
        // this.driver.IO.Display1.Value = 0;
        // this.driver.IO.Adc2.OnChange((adc) => console.log(adc.Current.Value));
        // this.driver.IO.Adc1.OnChange((adc) =>
        // {
        //     // console.log(adc);
        //     const cur = adc.Current.Value;
        //     // console.log(cur); 
        //     driver.IO.Display1.Value = cur;
        //     if (Math.abs(cur-adc1prevVal)>2)
        //     {
        //     //     adc1prevVal=cur;
        //     //     console.log(adc.Current.Value);
        //         const percent = this.ToPercent(adc.Current.Value, this.driver.IO.Adc1.MaxValue)
        //         this.adc1.next(percent);
        //     } 
        // });
    }

    private ToPercent(value, max): number
    {
        return (value * 100) / max;
    }

    public get OnButton1Press(): Rx.Subject<boolean>
    {
        return this.button1;
    }

    public get OnButton2Press(): Rx.Subject<boolean>
    {
        return this.button2;
    }

    public get Knob1(): Rx.Subject<number>
    {
        return this.adc1;
    }
}
