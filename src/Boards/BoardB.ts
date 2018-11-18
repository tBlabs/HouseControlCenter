import { injectable } from 'inversify';
import 'reflect-metadata';
import { Board, BoardSocketConnector } from 'bluepill-client-library/bin';
import { IBoard } from './IBoard';

@injectable()
export class DriverB implements IBoard
{
    public readonly IO: Board;
  
    constructor()
    {
        const connector = new BoardSocketConnector('http://192.168.1.15:3000');
        // const connector = new BoardSocketConnector('http://192.168.1.10:3001');
        this.IO = new Board(connector);
    }
}