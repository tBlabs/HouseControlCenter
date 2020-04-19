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
const Clock_1 = require("../Helpers/Clock/Clock");
const MusicPlayer_1 = require("../Actors/MusicPlayer");
const Moment_1 = require("../Helpers/Clock/Moment");
const Time_1 = require("../Helpers/Clock/Time");
const Day_1 = require("../Helpers/Clock/Day");
let MorningFlow = class MorningFlow {
    constructor(_clock, _music) {
        this._clock = _clock;
        this._music = _music;
    }
    Init() {
        const wakeUpTime = new Moment_1.Moment(new Time_1.Time(9, 0), [Day_1.Day.Monday, Day_1.Day.Tuesday, Day_1.Day.Wednesday, Day_1.Day.Thursday, Day_1.Day.Friday]);
        this._clock.At(wakeUpTime, async () => {
            await this._music.Play("morning.list");
        });
    }
};
MorningFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Clock_1.Clock,
        MusicPlayer_1.MusicPlayer])
], MorningFlow);
exports.MorningFlow = MorningFlow;
//# sourceMappingURL=MorningFlow.js.map