import { BoardB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import { injectable } from "inversify";

@injectable()
export class Lights implements IActor
{
    constructor(private _board: BoardB)
    { }

    private level: number = 0;

    public NextLevel(): void
    {
        this.level++;
        this.level %= 3;

        this._board.IO.Output3.Value = (this.level > 0) ? 1 : 0;
        this._board.IO.Output4.Value = (this.level > 1) ? 1 : 0;
     }

    public Toggle(): void
    {
        this._board.IO.Output3.Toggle();
        this._board.IO.Output4.Toggle();
    }

    public Off(): void
    {
        this._board.IO.Output3.Value = 1;
        this._board.IO.Output4.Value = 1;
        this._board.IO.Pwm4.Value = 0;
    }

    public IsOff(): boolean
    {
        return this._board.IO.Output3.Value === 0 ? true : false;
    }
}
