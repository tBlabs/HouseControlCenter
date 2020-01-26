"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const axios_1 = require("axios");
let UsbDisplay = class UsbDisplay {
    Print(value) {
        axios_1.default.get(`${process.env.USB_DISPLAY_ADDR}/set/${value}/0/1`);
    }
};
UsbDisplay = __decorate([
    inversify_1.injectable()
], UsbDisplay);
exports.UsbDisplay = UsbDisplay;
//# sourceMappingURL=UsbDisplay.js.map