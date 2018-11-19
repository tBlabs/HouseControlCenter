import { injectable, inject, multiInject } from 'inversify';
import { Types } from './IoC/Types';
import { IFlow } from './Flows/IFlow';
import { IBoard } from './Boards/IBoard';

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
// let i=0;
        setInterval(() => {
            // this._boardB.IO.Output1.Toggle();
            this._boards.forEach(b => b.IO.Output1.Toggle());
            // console.log(i++);
        }, 1000);

        this._boards[0].IO.Display1.Value=1234;
        this._boards[1].IO.Display1.Value=1234;

        this._flows.forEach(f => f.Init());
    }
}
