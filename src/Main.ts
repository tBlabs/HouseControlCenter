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
import { Clock } from './Helpers/Clock/Clock';
import { Moment } from './Helpers/Clock/Moment';
import { Time } from './Helpers/Clock/Time';
import { MusicPlayer } from './Actors/MusicPlayer';
import { Day } from './Helpers/Clock/Day';

@injectable()
export class Main
{
    constructor(
        @multiInject(Types.IBoard) private _boards: IBoard[],
        @multiInject(Types.IFlow) private _flows: IFlow[],
        private _time: DateTimeProvider,
        private _clock: Clock,
        private _music: MusicPlayer,
        private _heartBeat: HeartBeat)
    { }

    public async Start(): Promise<void>
    {
        const appName = 'HOUSE CONTROL CENTER';
        console.log(appName + ' START');

        const git = new Git();
        const appVersion = await git.Version();
        console.log('ver:', appVersion);

        const server = express();
        server.use(cors());
        server.get('/', (req, res) => res.send(appName + ' ver.' + appVersion));
        server.get('/ping', (req, res) => res.send(appName + ' pong'));
        server.get('/version', (req, res) => res.send(appVersion));

        // this._heartBeat.BlinkBluePillsLeds();

        this._flows.forEach(f => f.Init());


        server.get('/detach', (req, res) =>
        {
            this._boards.forEach(b => b.Connector.Disconnect());

            res.sendStatus(201);
        });

        const port = 5000;
        server.listen(port, () => console.log(appName + ' SERVER STARTED @', port));
    }
}
