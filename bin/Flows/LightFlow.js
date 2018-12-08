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
const LightsSwitch_1 = require("../Actors/LightsSwitch");
const Lights_1 = require("../Actors/Lights");
const inversify_1 = require("inversify");
const DeskPanel_1 = require("../Actors/DeskPanel");
const Clock_1 = require("../Helpers/Clock/Clock");
const Moment_1 = require("../Helpers/Clock/Moment");
const Time_1 = require("../Helpers/Clock/Time");
const Day_1 = require("../Helpers/Clock/Day");
let LightFlow = class LightFlow {
    constructor(_doorPanel, _deskPanel, _lights, _clock) {
        this._doorPanel = _doorPanel;
        this._deskPanel = _deskPanel;
        this._lights = _lights;
        this._clock = _clock;
    }
    Init() {
        const mondayToFriday = [Day_1.Day.Monday, Day_1.Day.Tuesday, Day_1.Day.Wednesday, Day_1.Day.Thursday, Day_1.Day.Friday];
        const wakeUpMoment = new Moment_1.Moment(new Time_1.Time(7, 30), mondayToFriday);
        this._clock.At(wakeUpMoment, () => {
            this._lights.OnForOneHour();
        });
        this._deskPanel.OnButton1Press.subscribe(() => {
            this._lights.NextLevel();
        });
        this._doorPanel.OnMainLampButtonPress.subscribe(() => {
            this._lights.Toggle();
        });
        this._doorPanel.OnMainLampDelayedOffButtonPress.subscribe(() => {
            this._lights.OffWithDelay(15);
        });
    }
};
LightFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [LightsSwitch_1.DoorPanel,
        DeskPanel_1.DeskPanel,
        Lights_1.Lights,
        Clock_1.Clock])
], LightFlow);
exports.LightFlow = LightFlow;
//# sourceMappingURL=LightFlow.js.map