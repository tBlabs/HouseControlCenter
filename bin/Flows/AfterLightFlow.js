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
const InternalIO_1 = require("../Boards/InternalIO");
const Lamp_1 = require("../Actors/Lamp");
const Sequencer_1 = require("../Utils/Sequencer");
let AfterLightFlow = class AfterLightFlow {
    constructor(_io, _lamp) {
        this._io = _io;
        this._lamp = _lamp;
    }
    Init() {
        let seq = new Sequencer_1.Sequencer();
        seq.Range(1, 150, 5, 15)
            .Step(150, 3000)
            .Range(150, 1, 1, 50)
            .Step(0, 0);
        seq.OnChange = async (v) => {
            this._lamp.SetPower(v);
        };
        this._io.OnInput1Change = (s) => {
            if (s)
                seq.Start();
            else
                seq.Break(0);
        };
    }
};
AfterLightFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [InternalIO_1.InternalIO,
        Lamp_1.Lamp])
], AfterLightFlow);
exports.AfterLightFlow = AfterLightFlow;
//# sourceMappingURL=AfterLightFlow.js.map