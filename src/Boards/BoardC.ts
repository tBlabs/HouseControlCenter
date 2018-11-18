import { Board, BoardSocketConnector } from 'bluepill-client-library/bin';
import { injectable } from 'inversify';
import { IBoard } from './IBoard';

@injectable()
export class DriverC implements IBoard
{
    public readonly IO: Board;

    constructor()
    {
        const connector = new BoardSocketConnector('http://192.168.1.10:3001');
        this.IO = new Board(connector);
    }
}