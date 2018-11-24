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
const BoardB_1 = require("../Boards/BoardB");
const Rx = require("rxjs");
const inversify_1 = require("inversify");
let DoorPanel = class DoorPanel {
    constructor(driver) {
        this.driver = driver;
        this.lightsSwitch = new Rx.Subject();
        this.delayedOff = new Rx.Subject();
        this.driver.IO.Input1.OnFalling(() => this.lightsSwitch.next(true));
        this.driver.IO.Input2.OnFalling(() => this.delayedOff.next(true));
    }
    get OnMainLampButtonPress() {
        return this.lightsSwitch;
    }
    get OnMainLampDelayedOffButtonPress() {
        return this.delayedOff;
    }
};
DoorPanel = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [BoardB_1.BoardB])
], DoorPanel);
exports.DoorPanel = DoorPanel;
//# sourceMappingURL=LightsSwitch.js.map