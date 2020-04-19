import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";
import { BoardA } from "../Boards/BoardA";

@injectable()
export class MainPanel implements IActor
{
    public Button1Press = new Rx.Subject<void>();
    public Button2Press = new Rx.Subject<void>();
    public Button3Press = new Rx.Subject<void>();
    public Button4Press = new Rx.Subject<void>();
    public Button5Press = new Rx.Subject<void>();
    public Button6Press = new Rx.Subject<void>();
    public Button7Press = new Rx.Subject<void>();
    public set Display(value)
    {
        this._driver.IO.Display1.Dot = 0;
        this._driver.IO.Pwm1.Value = 820;
        this._driver.IO.Display1.Value = value;
    }
    // private adc1 = new Rx.Subject<number>();

    constructor(private _driver: BoardA)
    {
        this._driver.IO.Input1.OnKeyPress(() =>
        {
            // console.log('BTN 1 PRESS');
            this.Button1Press.next();
        });
        this._driver.IO.Input2.OnKeyPress(() => 
        {
            // console.log('BTN 2 PRESS');
            this.Button2Press.next();
        });
        this._driver.IO.Input3.OnFalling(() => 
        {
            // console.log('BTN 3 PRESS');
            this.Button3Press.next();
        });
        this._driver.IO.Input4.OnKeyPress(() => 
        {
            // console.log('BTN 4 PRESS');
            this.Button4Press.next();
        });
        this._driver.IO.Input5.OnKeyPress(() => 
        {
            // console.log('BTN 5 PRESS');
            this.Button5Press.next();
        });
        this._driver.IO.Input6.OnKeyPress(() => 
        {
            // console.log('BTN 6 PRESS');
            this.Button6Press.next();
        });
        this._driver.IO.Input7.OnKeyPress(() => 
        {
            // console.log('BTN 7 PRESS');
            this.Button7Press.next();
        });
    }

    // private ToPercent(value, max): number
    // {
    //     return (value * 100) / max;
    // }

    // public get OnButton1Press(): Rx.Subject<void>
    // {
    //     return this.button1;
    // }

    // public get OnButton2Press(): Rx.Subject<boolean>
    // {
    //     return this.button2;
    // }
    // public get OnButton3Press(): Rx.Subject<boolean>
    // {
    //     return this.button3;
    // }

    // public get Knob1(): Rx.Subject<number>
    // {
    //     return this.adc1;
    // }
}
