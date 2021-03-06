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
const MainPanel_1 = require("../Actors/MainPanel");
const Clock_1 = require("../Helpers/Clock/Clock");
const WindowLamp_1 = require("../Actors/WindowLamp");
let LightFlow = class LightFlow {
    constructor(_doorPanel, _mainPanel, _windowLamp, _lights, _clock) {
        this._doorPanel = _doorPanel;
        this._mainPanel = _mainPanel;
        this._windowLamp = _windowLamp;
        this._lights = _lights;
        this._clock = _clock;
    }
    Init() {
        // const mondayToFriday = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday];
        // const wakeUpMoment = new Moment(new Time(7, 30), mondayToFriday);
        // this._clock.At(wakeUpMoment, () =>
        // {
        //     this._lights.OnForOneHour();
        // });
        // this._mainPanel.Knob1.subscribe(val =>
        // {
        //     this._windowLamp.SetLightPercent(val);
        // });
        // this._mainPanel.OnButton1Press.subscribe(() =>
        // {
        //     this._lights.NextLevel();
        // });
        // this._doorPanel.OnMainLampButtonPress.subscribe(() =>
        // {
        //     this._lights.Toggle();
        // });
        // this._doorPanel.OnMainLampDelayedOffButtonPress.subscribe(() =>
        // {
        //     this._lights.OffWithDelay(15);
        // });
    }
};
LightFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [LightsSwitch_1.DoorPanel,
        MainPanel_1.MainPanel,
        WindowLamp_1.WindowLamp,
        Lights_1.Lights,
        Clock_1.Clock])
], LightFlow);
exports.LightFlow = LightFlow;
//# sourceMappingURL=LightFlow.js.map