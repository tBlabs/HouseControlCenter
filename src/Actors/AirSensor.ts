import { injectable, inject } from "inversify";
import { Types } from "../IoC/Types";

@injectable()
export class AirSensor
{
    constructor(@inject(Types.ExpressServer) private _server)
    { }

    public OnLevelChange(callback: (pm25: number) => void): void
    {
        this._server.get('/air-sensor/:lvl', (req, res) =>
        {
            const lvl = req.params.lvl;
            callback(lvl);
            res.sendStatus(200);
        })
    }
}