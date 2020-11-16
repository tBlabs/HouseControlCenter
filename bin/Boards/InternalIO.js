"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const SocketIoClient = require("socket.io-client");
let InternalIO = class InternalIO {
    Init() {
        const socket = SocketIoClient(process.env.ON_BOARD_IO);
        socket.on('input-change', async (n, s) => {
            var _a;
            if (n === "Button1")
                (_a = this.OnInput1Change) === null || _a === void 0 ? void 0 : _a.call(this, s);
        });
        socket.on('connect', () => console.log(socket.id, 'connected'));
        socket.on('error', () => console.log('err'));
        socket.on('disconnect', () => console.log('discon'));
    }
};
InternalIO = __decorate([
    inversify_1.injectable()
], InternalIO);
exports.InternalIO = InternalIO;
//# sourceMappingURL=InternalIO.js.map