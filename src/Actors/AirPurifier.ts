import { injectable } from 'inversify';
import { BoardA } from '../Boards/BoardA';

@injectable()
export class AirPurifier
{
    constructor(private _boardA: BoardA)
    { }

    public On(): void
    {
        this._boardA.IO.Output6.Off();
    }
    
    public Off(): void
    {
        this._boardA.IO.Output6.On();
    }
}
