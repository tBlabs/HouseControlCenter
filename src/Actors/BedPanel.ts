import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";
import { BoardC } from "../Boards/BoardC";

@injectable()
export class BedPanel implements IActor
{
    constructor(private driver: BoardC)
    {
        this.driver.IO.Input1.OnFalling(() => this.button1.next(true));
    }

    public get OnButton1Press(): Rx.Subject<boolean>
    {
        return this.button1;
    }

    private button1 = new Rx.Subject<boolean>();
}
