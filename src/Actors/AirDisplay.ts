import { injectable } from 'inversify';
import { BoardA } from '../Boards/BoardA';

@injectable()
export class AirDisplay
{
    constructor(private _board: BoardA)
    { 
        _board.IO.Display1.Dot = 2;
    }

    public Print(value: number): void
    {
        this._board.IO.Display1.Value = value;
    }
}
