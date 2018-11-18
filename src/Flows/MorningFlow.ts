// import { IFlow } from "./IFlow";
// import { injectable } from "inversify";

// @injectable()
// export class MorningFlow implements IFlow
// {
//     constructor(
//         private _cron,
//         private _bedPanel,
//         private _musicPlayer)
//     { }

//     alerts = [
//         { d: [1, 2, 3, 4, 5], h: 7, m: 30, e: ['lightsOn'] },
//         { d: [1, 2, 3, 4, 5], h: 7, m: 40, e: ['musicOn'] },
//         { d: [1, 2, 3, 4, 5], h: 9, m: 30, e: ['lightsOff', 'musicOff'] },
//     ]

//     public Go(): void
//     {
//         this._clock.At('wakeup', (t) =>
//         {

//         })

//         this._cron.At(config.wakeUpTime, () =>
//         {
//             this._musicPlayer.VolumeSlowRise();
//             this._musicPlayer.PlayMorningPlaylist();
//         });

//         this._bedPanel.MusicStop((event) =>
//         {
//             if (event == "onPress")
//                 this._musicPlayer.Stop();
//             else if (event == "onLongPress")
//                 this._musicPlayer.SlowStop();
//         });
//     }
// }
