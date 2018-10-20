import axios from 'axios';
import { AirDisplayIp } from './addresses';
import { injectable } from 'inversify';

@injectable()
export class AirDisplay
{
    public Print(pm25: number): void
    {
        axios.get(AirDisplayIp + '/display1/' + pm25);
    }
}