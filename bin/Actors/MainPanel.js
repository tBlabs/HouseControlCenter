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
const Rx = require("rxjs");
const inversify_1 = require("inversify");
const BoardA_1 = require("../Boards/BoardA");
let MainPanel = class MainPanel {
    // private adc1 = new Rx.Subject<number>();
    constructor(_driver) {
        this._driver = _driver;
        this.Button1Press = new Rx.Subject();
        this.Button2Press = new Rx.Subject();
        this.Button3Press = new Rx.Subject();
        this.Button4Press = new Rx.Subject();
        this.Button5Press = new Rx.Subject();
        this.Button6Press = new Rx.Subject();
        this.Button7Press = new Rx.Subject();
        this._driver.IO.Input1.OnKeyPress(() => {
            // console.log('BTN 1 PRESS');
            this.Button1Press.next();
        });
        this._driver.IO.Input2.OnKeyPress(() => {
            // console.log('BTN 2 PRESS');
            this.Button2Press.next();
        });
        this._driver.IO.Input3.OnFalling(() => {
            // console.log('BTN 3 PRESS');
            this.Button3Press.next();
        });
        this._driver.IO.Input4.OnKeyPress(() => {
            // console.log('BTN 4 PRESS');
            this.Button4Press.next();
        });
        this._driver.IO.Input5.OnKeyPress(() => {
            // console.log('BTN 5 PRESS');
            this.Button5Press.next();
        });
        this._driver.IO.Input6.OnKeyPress(() => {
            // console.log('BTN 6 PRESS');
            this.Button6Press.next();
        });
        this._driver.IO.Input7.OnKeyPress(() => {
            // console.log('BTN 7 PRESS');
            this.Button7Press.next();
        });
    }
    set Display(value) {
        this._driver.IO.Display1.Dot = 0;
        this._driver.IO.Pwm1.Value = 820;
        this._driver.IO.Display1.Value = value;
    }
};
MainPanel = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [BoardA_1.BoardA])
], MainPanel);
exports.MainPanel = MainPanel;
//# sourceMappingURL=MainPanel.js.map