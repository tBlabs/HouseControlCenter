import { Board } from "bluepill-client-library";
import { IBoardConnector } from "bluepill-client-library/bin/Connectors/IBoardConnector";

export interface IBoard
{ 
    IO: Board;
    Connector: IBoardConnector;
}
