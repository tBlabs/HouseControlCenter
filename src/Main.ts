import { injectable, inject, multiInject } from 'inversify';
import { Types } from './IoC/Types';
import { IFlow } from './Flows/IFlow';
import { IBoard } from './Boards/IBoard';
import { Repeater } from './services/repeater/Repeater';
import * as express from 'express';
import { Git } from './Utils/Git';

@injectable()
export class Main
{
    constructor(
        @multiInject(Types.IBoard) private _boards: IBoard[],
        @multiInject(Types.IFlow) private _flows: IFlow[])
    { }

    public async Start(): Promise<void>
    {
        console.log('HCC START');
        const git = new Git();
        const ver = await git.Version();
        console.log('ver:', ver);

        const server = express();

        Repeater.EverySecond((c) => this._boards.forEach(b => c % 2 ? b.IO.Output1.On() : b.IO.Output1.Off())); // TODO: move to HeartBeat class

        this._flows.forEach(f => f.Init());

        server.get('/detach', (req, res) =>
        {
            this._boards.forEach(b => b.Connector.Disconnect());

            res.send(200);
        });

        const port = 5000;
        server.listen(port, () => console.log('HCC SERVER STARTED @', port));
    }
}
