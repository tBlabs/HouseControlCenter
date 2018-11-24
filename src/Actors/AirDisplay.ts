import { injectable } from 'inversify';
import { BoardC } from '../Boards/BoardC';

@injectable()
export class AirDisplay
{
    constructor(private _board: BoardC)
    { 
        _board.IO.Display1.Dot = 2;
    }

    public Print(value: number): void
    {
        this._board.IO.Display1.Value = value;
    }
}
