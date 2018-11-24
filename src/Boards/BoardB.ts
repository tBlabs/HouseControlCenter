import { injectable } from 'inversify';
import 'reflect-metadata';
import { Board, BoardSocketConnector } from 'bluepill-client-library/bin';
import { IBoard } from './IBoard';

@injectable()
export class BoardB implements IBoard
{
    public readonly IO: Board;
  
    constructor()
    {
        const connector = new BoardSocketConnector('http://192.168.1.101:3000');

        this.IO = new Board(connector);
    }
}