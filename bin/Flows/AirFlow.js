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
const AirSensor_1 = require("../Actors/AirSensor");
const AirDisplay_1 = require("../Actors/AirDisplay");
const AirPurifier_1 = require("../Actors/AirPurifier");
let AirFlow = class AirFlow {
    constructor(_airSensor, _airDisplay, _airPurifier) {
        this._airSensor = _airSensor;
        this._airDisplay = _airDisplay;
        this._airPurifier = _airPurifier;
    }
    Init() {
        this._airSensor.OnLevelChange(pm10 => {
            this._airDisplay.Print(pm10);
            if (pm10 > 40) {
                this._airPurifier.On();
            }
            else if (pm10 < 30) {
                this._airPurifier.Off();
            }
        });
    }
};
AirFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [AirSensor_1.AirSensor,
        AirDisplay_1.AirDisplay,
        AirPurifier_1.AirPurifier])
], AirFlow);
exports.AirFlow = AirFlow;
//# sourceMappingURL=AirFlow.js.map