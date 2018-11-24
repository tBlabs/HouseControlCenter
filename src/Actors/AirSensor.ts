import { injectable, inject } from "inversify";
import { Sensor, SDS018SocketConnector } from 'air-pollution-sensor-client-lib/bin';

@injectable()
export class AirSensor
{
    private onLevelChangeCallback: any;

    constructor()
    {
        const connectionString = 'http://192.168.1.100:3005';
        const connector = new SDS018SocketConnector(connectionString);
        const sensor = new Sensor(connector);

        sensor.OnChange((pm10, pm25)=>  this.onLevelChangeCallback(pm10));
    }

    public OnLevelChange(callback: (pm10: number) => void): void
    {
        this.onLevelChangeCallback = callback;
    }
}
