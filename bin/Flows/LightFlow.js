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
const DelayHelper_1 = require("../Helpers/DelayHelper");
const BedPanel_1 = require("../Actors/BedPanel");
let LightFlow = class LightFlow {
    constructor(_doorPanel, _bedPanel, _lights, _delay) {
        this._doorPanel = _doorPanel;
        this._bedPanel = _bedPanel;
        this._lights = _lights;
        this._delay = _delay;
    }
    Init() {
        this._bedPanel.OnButton1Press.subscribe(() => {
            this._lights.Toggle();
        });
        this._doorPanel.OnMainLampButtonPress.subscribe(() => {
            this._lights.Toggle();
        });
        this._doorPanel.OnMainLampDelayedOffButtonPress.subscribe(() => {
            if (this._lights.IsOff()) {
                this._delay.FiveSeconds(() => {
                    this._lights.Off();
                });
            }
        });
    }
};
LightFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [LightsSwitch_1.DoorPanel,
        BedPanel_1.BedPanel,
        Lights_1.Lights,
        DelayHelper_1.Delay])
], LightFlow);
exports.LightFlow = LightFlow;
//# sourceMappingURL=LightFlow.js.map