import axios from 'axios';
import { AirPurifierIp } from './addresses';
import { injectable } from 'inversify';

@injectable()
export class AirPurifier
{
    public On(): void
    {
        axios.get(AirPurifierIp + '/led1/1');
    }

    public Off(): void
    {
        axios.get(AirPurifierIp + '/led1/0');
    }
}