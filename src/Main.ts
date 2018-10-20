import { injectable, inject } from 'inversify';
import { Types } from './IoC/Types';
import { IStartupArgs } from './services/environment/IStartupArgs';
import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import { Repeater } from './services/repeater/Repeater';

@injectable()
export class Main
{
    constructor(
        @inject(Types.IStartupArgs) private _args: IStartupArgs)
    { }

    private get ClientDir(): string
    {
        const s = __dirname.split('/'); // __dirname returns '/home/tb/projects/EventsManager/bin'. We don't wanna 'bin'...
        return s.slice(0, s.length - 1).join('/') + '/client';
    }

    public async Start(): Promise<void>
    {
        const server = express();
        const httpServer = http.createServer(server);
        const socket = socketIo(httpServer);

        server.get('/favicon.ico', (req, res) => res.status(204));

        server.get('/ping', (req, res) => res.send('pong'));

        server.use(express.static(this.ClientDir));

        socket.on('connection', (socket) =>
        {
            let i = 0;
            Repeater.EverySecond(() =>
            {
                socket.emit('data', { foo: "bar", baz: i++ });
            });
        });

        const port = 3000;
        httpServer.listen(port, () => console.log('SERVER STARTED @ ' + port));

        process.on('SIGINT', () =>
        {
            httpServer.close(() => console.log('SERVER CLOSED'));
        });
    }
}
