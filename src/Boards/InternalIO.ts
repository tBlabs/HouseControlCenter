import { injectable } from 'inversify';
import * as SocketIoClient from 'socket.io-client';
import { IBoard } from './IBoard';

@injectable()
export class InternalIO implements IBoard
{
    public Init()
    {
        const socket = SocketIoClient(process.env.ON_BOARD_IO);

        socket.on('input-change', async (n, s) =>
        {
            if (n === "Button1")
                this.OnInput1Change?.(s);
        });
        socket.on('connect', () => console.log(socket.id, 'connected'));
        socket.on('error', () => console.log('err'));
        socket.on('disconnect', () => console.log('discon'));
    }
    
    public OnInput1Change?: (state: 0 | 1)=> void;
}