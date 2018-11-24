import { injectable, inject, multiInject } from 'inversify';
import { Types } from './IoC/Types';
import { IFlow } from './Flows/IFlow';
import { IBoard } from './Boards/IBoard';
import { Repeater } from './services/repeater/Repeater';

@injectable()
export class Main
{
    constructor(
        @multiInject(Types.IBoard) private _boards: IBoard[],
        @multiInject(Types.IFlow) private _flows: IFlow[])
    { }

    public async Start(): Promise<void>
    {
        console.log('start');

        Repeater.EverySecond((c) => this._boards.forEach(b => c % 2 ? b.IO.Output1.On() : b.IO.Output1.Off()));

        this._flows.forEach(f => f.Init());
    }
}
