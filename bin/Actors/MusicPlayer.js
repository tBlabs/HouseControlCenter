"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const inversify_1 = require("inversify");
let MusicPlayer = class MusicPlayer {
    async VolPlus() {
        let vol = +(await this.SendQuery(['vol']));
        // console.log('+', vol);
        vol += 5;
        if (vol >= 100)
            vol = 100;
        await this.SendCommand(['vol', vol.toString()]);
        return vol;
    }
    async VolMinus() {
        let vol = +(await this.SendQuery(['vol']));
        // console.log('-', vol);
        vol -= 5;
        if (vol <= 0)
            vol = 0;
        await this.SendCommand(['vol', vol.toString()]);
        return vol;
    }
    async SendCommand(cmd) {
        try {
            await axios_1.default.get([process.env.PLAYER_ADDR, ...cmd].join('/'));
        }
        catch (error) {
            console.log('Can not execute MusicPlayer command', ...cmd);
        }
    }
    async SendQuery(cmd) {
        try {
            const res = await axios_1.default.get([process.env.PLAYER_ADDR, ...cmd].join('/'));
            //   console.log(res.data);
            return res.data;
        }
        catch (error) {
            console.log('Can not execute MusicPlayer query', ...cmd);
        }
    }
    async Play(playlistName) {
        await this.SendCommand(['start', playlistName]);
    }
    async Stop() {
        await this.SendCommand(['stop']);
    }
    async Next() {
        await this.SendCommand(['next']);
    }
    async Prev() {
        await this.SendCommand(['previous']);
    }
    async IsPlaying() {
        const trackOrNull = await this.SendQuery(['current']);
        //console.log('NNNNNN', trackOrNull ? trackOrNull.length > 0 : false);
        return trackOrNull ? trackOrNull.length > 0 : false;
    }
};
MusicPlayer = __decorate([
    inversify_1.injectable()
], MusicPlayer);
exports.MusicPlayer = MusicPlayer;
//# sourceMappingURL=MusicPlayer.js.map