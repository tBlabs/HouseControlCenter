import { BoardB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import { injectable } from "inversify";
import { Delay } from "../Helpers/DelayHelper";

@injectable()
export class Lights implements IActor
{
    constructor(
        private _board: BoardB,
        private _delay: Delay)
    { }

    public OffWithDelay(delay: number): void
    {
        if (this.IsOn())
        {
            this._delay.Of(delay, () =>
            {
                this.Off();
            });
        }
    }

    private level: number = 0;

    public NextLevel(): void
    {
        switch (this.level)
        {
            case 0:
                this._board.IO.Pwm4.Value = 1000;
                this._board.IO.Output3.Value = 1;
                this._board.IO.Output4.Value = 1;
                break;
            case 1:
                this._board.IO.Pwm4.Value = 0;
                this._board.IO.Output3.Value = 0;
                this._board.IO.Output4.Value = 1;
                break;
            case 2:
                this._board.IO.Pwm4.Value = 0;
                this._board.IO.Output3.Value = 0;
                this._board.IO.Output4.Value = 0;
                break;
        }

        this.level++;
        this.level %= 3;
    }

    public On(): void
    {
        this._board.IO.Output3.Value = 0;
        this._board.IO.Output4.Value = 0;
    }

    public OnForOneHour(): void
    {
        this.On();

        const oneHour = 60 * 60;

        this._delay.Of(oneHour, () =>
        {
            this.Off();
        });
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

    public IsOn(): boolean
    {
        return this._board.IO.Output3.Value === 0 ? true : false;
    }
}
