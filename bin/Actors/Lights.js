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
const DelayHelper_1 = require("../Helpers/DelayHelper");
let Lights = class Lights {
    constructor(_board, _delay) {
        this._board = _board;
        this._delay = _delay;
        this.level = 0;
    }
    OffWithDelay(delay) {
        if (this.IsOn()) {
            this._delay.Of(delay, () => {
                this.Off();
            });
        }
    }
    NextLevel() {
        switch (this.level) {
            case 0:
                this._board.IO.Pwm4.Value = 1000;
                this._board.IO.Output3.Value = 1;
                this._board.IO.Output4.Value = 1;
                break;
            case 1:
                this._board.IO.Pwm4.Value = 0;
                this._board.IO.Output3.Value = 0;
                this._board.IO.Output4.Value = 1;
                break;
            case 2:
                this._board.IO.Pwm4.Value = 0;
                this._board.IO.Output3.Value = 0;
                this._board.IO.Output4.Value = 0;
                break;
            case 3:
                this.Off();
                break;
        }
        this.level++;
        this.level %= 4;
    }
    On() {
        this._board.IO.Output3.Value = 0;
        this._board.IO.Output4.Value = 0;
    }
    OnForOneHour() {
        this.On();
        const oneHour = 60 * 60;
        this._delay.Of(oneHour, () => {
            this.Off();
        });
    }
    Toggle() {
        this._board.IO.Output3.Toggle();
        this._board.IO.Output4.Toggle();
    }
    Off() {
        this._board.IO.Output3.Value = 1;
        this._board.IO.Output4.Value = 1;
        this._board.IO.Pwm4.Value = 0;
    }
    IsOn() {
        return this._board.IO.Output3.Value === 0 ? true : false;
    }
};
Lights = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [BoardB_1.BoardB,
        DelayHelper_1.Delay])
], Lights);
exports.Lights = Lights;
//# sourceMappingURL=Lights.js.map