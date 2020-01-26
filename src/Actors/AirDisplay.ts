import { injectable } from 'inversify';
import { BoardA } from '../Boards/BoardA';
import { UsbDisplay } from './UsbDisplay';

@injectable()
export class AirDisplay
{
    constructor(
        // private _board: BoardA
        private _display: UsbDisplay
        )
    { 
        // _board.IO.Display1.Dot = 2;
    }

    public PrintPm25(value: number): void
    {
        // this._board.IO.Display1.Value = value;
        this._display.Print(value / 10);
    }
}
