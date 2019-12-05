import { injectable, multiInject } from 'inversify';
import { Types } from './IoC/Types';
import { IFlow } from './Flows/IFlow';
import { IBoard } from './Boards/IBoard';
import * as express from 'express';
import * as cors from 'cors';
import { Git } from './Utils/Git';
import { Lights } from './Actors/Lights';
import { HeartBeat } from './HeartBeat';
import { DateTimeProvider } from './services/DateTimeProvider/DateTimeProvider';

@injectable()
export class Main
{
    constructor(
        @multiInject(Types.IBoard) private _boards: IBoard[],
        @multiInject(Types.IFlow) private _flows: IFlow[],
        private _time: DateTimeProvider,
        private _heartBeat: HeartBeat)
    { }

    public async Start(): Promise<void>
    {
        console.log('HOUSE CONTROL CENTER START');

        const git = new Git();
        const ver = await git.Version();
        console.log('ver:', ver);

        const server = express();
        server.use(cors());
        server.get('/ping', (req, res) => res.send('pong'));
        server.get('/version', (req, res) => res.send(ver));

        this._heartBeat.BlinkBluePillsLeds();

        this._flows.forEach(f => f.Init());


        server.get('/detach', (req, res) =>
        {
            this._boards.forEach(b => b.Connector.Disconnect());

            res.send(200);
        });

        const port = 5000;
        server.listen(port, () => console.log('HOUSE CONTROL CENTER SERVER STARTED @', port));
    }
}
