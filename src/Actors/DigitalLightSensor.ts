import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";
import { BoardA } from "../Boards/BoardA";
import { EventEmitter } from "events";
import SocketIoClient from 'socket.io-client';

@injectable()
export class DigitalLightSensor implements IActor
{
    private onChangeCallback: any;
   

    public OnNoLight = new EventEmitter();
 
    constructor()
    {
        // this.OnNoLight.emit()
        const socket = SocketIoClient('http://localhost:8000');

        socket.on('isalive', v=>console.log('ISALIVE', v))
    }
}
