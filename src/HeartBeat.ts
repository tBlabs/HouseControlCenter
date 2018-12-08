import { injectable, inject, multiInject } from 'inversify';
import { Types } from './IoC/Types';
import { IBoard } from './Boards/IBoard';
import { IRepeater } from './services/repeater/Repeater';

@injectable()
export class HeartBeat
{
    constructor(
        @multiInject(Types.IBoard) private _boards: IBoard[],
        @inject(Types.IRepeater) private _repeater: IRepeater) 
    { }

    public BlinkBluePillsLeds()
    {
        this._repeater.EverySecond((counter) =>
        {
            this._boards.forEach(board => counter % 2 ? board.IO.Output1.On() : board.IO.Output1.Off());
        });
    }
}