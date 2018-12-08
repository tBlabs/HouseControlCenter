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
const DelayHelper_1 = require("../Helpers/DelayHelper");
const BoardB_1 = require("../Boards/BoardB");
const BoardC_1 = require("../Boards/BoardC");
const BoardA_1 = require("../Boards/BoardA");
const Clock_1 = require("../Helpers/Clock/Clock");
const Moment_1 = require("../Helpers/Clock/Moment");
const Time_1 = require("../Helpers/Clock/Time");
const Day_1 = require("../Helpers/Clock/Day");
let TestFlow = class TestFlow {
    constructor(_boardA, _boardB, _boardC, _clock, _delay) {
        this._boardA = _boardA;
        this._boardB = _boardB;
        this._boardC = _boardC;
        this._clock = _clock;
        this._delay = _delay;
    }
    Init() {
        this._clock.At(new Moment_1.Moment(new Time_1.Time(15, 4), [Day_1.Day.Saturday]), (m) => {
            console.log(m);
        });
        // this._boardA.IO.Input1.OnFalling((s) => this._boardA.IO.Output2.Toggle());
        this._boardA.IO.Input2.OnFalling((s) => this._boardA.IO.Output3.Toggle());
        // this._boardA.IO.Input5.OnFalling((s) => this._boardA.IO.Output4.Toggle());
        // this._boardA.IO.Input6.OnFalling((s) => this._boardA.IO.Output5.Toggle());
        // this._boardA.IO.Adc1.OnChange(a => this._boardA.IO.Pwm1.Value = a.Current.Value);
        // this._boardA.IO.Adc2.OnChange(a => this._boardA.IO.Pwm2.Value = a.Current.Value);
        let t = 0;
        let cc = 0;
        this._boardC.IO.Adc1.OnChange(s => {
            if (s.Current.Value > 50) {
                cc = 1;
                // this._boardA.IO.Pwm2.Value=t*100 < 1000 ? t*100 : 1000;
                this._boardA.IO.Pwm2.Value = this._boardA.IO.Pwm2.MaxValue;
            }
            else {
                cc = 0;
                this._boardA.IO.Pwm2.Value = 0;
            }
        });
        this._boardC.IO.Display1.Dot = 2;
        setInterval(() => {
            if (cc) {
                this._boardA.IO.Output5.On();
                t++;
                if (t >= 9999)
                    t = 0;
                this._boardC.IO.Display1.Value = t;
            }
            else {
                t = 0;
                this._boardA.IO.Output5.Off();
            }
        }, 100);
    }
};
TestFlow = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [BoardA_1.BoardA,
        BoardB_1.BoardB,
        BoardC_1.BoardC,
        Clock_1.Clock,
        DelayHelper_1.Delay])
], TestFlow);
exports.TestFlow = TestFlow;
//# sourceMappingURL=TestFlow.js.map