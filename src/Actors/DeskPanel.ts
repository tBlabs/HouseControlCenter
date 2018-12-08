import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";
import { BoardC } from "../Boards/BoardC";
import { BoardA } from "../Boards/BoardA";

@injectable()
export class DeskPanel implements IActor
{
    constructor(private driver: BoardA)
    {
        this.driver.IO.Input1.OnFalling(() => this.button1.next(true));
        this.driver.IO.Input2.OnFalling(() => this.button2.next(true));
    }

    public get OnButton1Press(): Rx.Subject<boolean>
    {
        return this.button1;
    }

    public get OnButton2Press(): Rx.Subject<boolean>
    {
        return this.button2;
    }

    private button1 = new Rx.Subject<boolean>();
    private button2 = new Rx.Subject<boolean>();
}
