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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const Types_1 = require("./IoC/Types");
let HeartBeat = class HeartBeat {
    constructor(_boards, _repeater) {
        this._boards = _boards;
        this._repeater = _repeater;
    }
    BlinkBluePillsLeds() {
        this._repeater.EverySecond((counter) => {
            this._boards.forEach(board => counter % 2 ? board.IO.Output1.On() : board.IO.Output1.Off());
        });
    }
};
HeartBeat = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.multiInject(Types_1.Types.IBoard)),
    __param(1, inversify_1.inject(Types_1.Types.IRepeater)),
    __metadata("design:paramtypes", [Array, Object])
], HeartBeat);
exports.HeartBeat = HeartBeat;
//# sourceMappingURL=HeartBeat.js.map