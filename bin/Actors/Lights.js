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
const inversify_1 = require("inversify");
let Lights = class Lights {
    constructor(driver) {
        this.driver = driver;
        this.level = 0;
    }
    NextLevel() {
        this.level++;
        this.level %= 3;
        this.driver.IO.Output3.Value = (this.level > 0) ? 1 : 0;
        this.driver.IO.Output4.Value = (this.level > 1) ? 1 : 0;
    }
    Toggle() {
        this.driver.IO.Output3.Toggle();
        this.driver.IO.Output4.Toggle();
    }
    Off() {
        this.driver.IO.Output3.Value = 1;
        this.driver.IO.Output4.Value = 1;
    }
    IsOff() {
        return this.driver.IO.Output3.Value === 0 ? true : false;
    }
};
Lights = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [BoardB_1.BoardB])
], Lights);
exports.Lights = Lights;
//# sourceMappingURL=Lights.js.map