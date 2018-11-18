// import { injectable, inject } from "inversify";
// import { Types } from "../IoC/Types";

// enum Event
// {
//     OnChange,
//     OnRising
// }
// class Sensor
// {

// }
// class BluePill
// {
//     public Adc1: Sensor;
// }
// @injectable()
// export class AirSensor
// {
//     onLevelChangeCallback: any;
//     constructor(
//         // @inject(Types.ExpressServer) private _server
//          private _boardA: BluePill
//     )
//     {
//         _boardA.Adc1.OnChange(val => { this.onLevelChangeCallback(val) })
//     }

//     public OnLevelChange(callback: (pm25: number) => void): void
//     {
//         this.onLevelChangeCallback = callback;
//         // this._server.get('/air-sensor/:lvl', (req, res) =>
//         // {
//         //     const lvl = req.params.lvl;
//         //     callback(lvl);
//         //     res.sendStatus(200);
//         // });
        
//     }
// }