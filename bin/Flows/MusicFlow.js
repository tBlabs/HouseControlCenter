"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const MainPanel_1 = require("../Actors/MainPanel");
const MusicPlayer_1 = require("../Actors/MusicPlayer");
let MusicFlow = class MusicFlow {
    constructor(_mainPanel, _musicPlayer) {
        this._mainPanel = _mainPanel;
        this._musicPlayer = _musicPlayer;
    }
    Init() {
        // this._mainPanel.OnButton1Press.subscribe(async () =>
        // {
        //     // console.log('PLAYYY');
        //     await this._musicPlayer.Play("morning.list");
        // });
        this._mainPanel.Button2Press.subscribe(async () => {
            await this._musicPlayer.Next();
        });
        this._mainPanel.Button6Press.subscribe(async () => {
            await this._musicPlayer.Prev();
        });
        this._mainPanel.Button4Press.subscribe(async () => {
            const vol = await this._musicPlayer.VolPlus();
            this._mainPanel.Display = vol;
        });
        this._mainPanel.Button7Press.subscribe(async () => {
            const vol = await this._musicPlayer.VolMinus();
            this._mainPanel.Display = vol;
        });
        this._mainPanel.Button5Press.subscribe(async () => {
            if (await this._musicPlayer.IsPlaying()) {
                await this._musicPlayer.Stop();
            }
            else {
                await this._musicPlayer.Play("morning.list");
            }
        });
    }
};
MusicFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [MainPanel_1.MainPanel,
        MusicPlayer_1.MusicPlayer])
], MusicFlow);
exports.MusicFlow = MusicFlow;
//# sourceMappingURL=MusicFlow.js.map