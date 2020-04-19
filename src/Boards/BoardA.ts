import 'reflect-metadata';
import { injectable } from 'inversify';
import { Board, BoardSocketConnector } from 'bluepill-client-library/bin';
import { IBoard } from './IBoard';
import { IBoardConnector } from 'bluepill-client-library/bin/Connectors/IBoardConnector';

@injectable()
export class BoardA implements IBoard
{
    public readonly IO: Board;
    public readonly Connector: IBoardConnector;

    constructor()
    {
        // this.Connector = new BoardSocketConnector('http://192.168.1.100:3000');
        this.Connector = new BoardSocketConnector(process.env.BOARD_A_ADDR);

        this.IO = new Board(this.Connector);
    }
}
