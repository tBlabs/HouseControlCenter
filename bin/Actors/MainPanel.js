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
    constructor(driver) {
        this.driver = driver;
        this.button1 = new Rx.Subject();
        this.button2 = new Rx.Subject();
        this.adc1 = new Rx.Subject();
        // this.driver.IO.Input1.OnFalling(() => this.button1.next(true));
        // this.driver.IO.Input2.OnFalling(() => this.button2.next(true));
        // let adc1prevVal = 0; 
        // this.driver.IO.Display1.Value = 0;
        // this.driver.IO.Adc2.OnChange((adc) => console.log(adc.Current.Value));
        // this.driver.IO.Adc1.OnChange((adc) =>
        // {
        //     // console.log(adc);
        //     const cur = adc.Current.Value;
        //     // console.log(cur); 
        //     driver.IO.Display1.Value = cur;
        //     if (Math.abs(cur-adc1prevVal)>2)
        //     {
        //     //     adc1prevVal=cur;
        //     //     console.log(adc.Current.Value);
        //         const percent = this.ToPercent(adc.Current.Value, this.driver.IO.Adc1.MaxValue)
        //         this.adc1.next(percent);
        //     } 
        // });
    }
    ToPercent(value, max) {
        return (value * 100) / max;
    }
    get OnButton1Press() {
        return this.button1;
    }
    get OnButton2Press() {
        return this.button2;
    }
    get Knob1() {
        return this.adc1;
    }
};
MainPanel = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [BoardA_1.BoardA])
], MainPanel);
exports.MainPanel = MainPanel;
//# sourceMappingURL=MainPanel.js.map