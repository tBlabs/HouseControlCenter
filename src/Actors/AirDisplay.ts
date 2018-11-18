import axios from 'axios';
import { AirDisplayIp } from './addresses';
import { injectable } from 'inversify';

@injectable()
export class AirDisplay
{
    // boardA = new BluePillClient('192.168.1.12:3000');

    public Print(pm25: number): void
    {
        // axios.get(AirDisplayIp + '/display1/' + pm25);
        // this.boardA.Display1.Set(pm25);
    }
}