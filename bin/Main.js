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
const express = require("express");
const cors = require("cors");
const Git_1 = require("./Utils/Git");
const HeartBeat_1 = require("./HeartBeat");
const DateTimeProvider_1 = require("./services/DateTimeProvider/DateTimeProvider");
const Clock_1 = require("./Helpers/Clock/Clock");
const MusicPlayer_1 = require("./Actors/MusicPlayer");
const InternalIO_1 = require("./Boards/InternalIO");
let Main = class Main {
    constructor(_boards, _flows, _time, _clock, _music, _io, _heartBeat) {
        this._boards = _boards;
        this._flows = _flows;
        this._time = _time;
        this._clock = _clock;
        this._music = _music;
        this._io = _io;
        this._heartBeat = _heartBeat;
    }
    async Start() {
        const appName = 'HOUSE CONTROL CENTER';
        console.log(appName + ' START');
        const git = new Git_1.Git();
        const appVersion = await git.Version();
        console.log('ver:', appVersion);
        const server = express();
        server.use(cors());
        server.get('/', (req, res) => res.send(appName + ' ver.' + appVersion));
        server.get('/ping', (req, res) => res.send(appName + ' pong'));
        server.get('/version', (req, res) => res.send(appVersion));
        // this._heartBeat.BlinkBluePillsLeds();
        // this._boards.forEach(b => b.Init());
        this._io.Init();
        this._flows.forEach(f => f.Init());
        // server.get('/detach', (req, res) =>
        // {
        //     this._boards.forEach(b => b.Connector.Disconnect());
        //     res.sendStatus(201);
        // });
        const port = 5000;
        server.listen(port, () => console.log(appName + ' SERVER STARTED @', port));
    }
};
Main = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.multiInject(Types_1.Types.IBoard)),
    __param(1, inversify_1.multiInject(Types_1.Types.IFlow)),
    __metadata("design:paramtypes", [Array, Array, DateTimeProvider_1.DateTimeProvider,
        Clock_1.Clock,
        MusicPlayer_1.MusicPlayer,
        InternalIO_1.InternalIO,
        HeartBeat_1.HeartBeat])
], Main);
exports.Main = Main;
//# sourceMappingURL=Main.js.map