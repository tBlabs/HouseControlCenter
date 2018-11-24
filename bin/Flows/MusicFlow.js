"use strict";
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
//     public Go(): void
//     {
//         this._wakeUpTimePanel.OnWakeUpTimeChange((t) =>
//         {
//             const wakeUpTime = 730;
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
//# sourceMappingURL=MusicFlow.js.map