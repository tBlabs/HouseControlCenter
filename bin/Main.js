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
const Git_1 = require("./Utils/Git");
const Lights_1 = require("./Actors/Lights");
const HeartBeat_1 = require("./HeartBeat");
const DateTimeProvider_1 = require("./services/DateTimeProvider/DateTimeProvider");
let Main = class Main {
    constructor(_boards, _flows, _lights, _time, _heartBeat) {
        this._boards = _boards;
        this._flows = _flows;
        this._lights = _lights;
        this._time = _time;
        this._heartBeat = _heartBeat;
    }
    async Start() {
        console.log('HCC START');
        const git = new Git_1.Git();
        const ver = await git.Version();
        console.log('ver:', ver);
        const server = express();
        const shortcuts = {
            '/ping': (req, res) => console.log('ping'),
            '/lights': (req, res) => this._lights.NextLevel(),
            '/time': (req, res) => res.send(this._time.Now.toString())
        };
        const shortcutsUrls = Object.keys(shortcuts);
        shortcutsUrls.forEach(url => {
            server.get(url, (req, res) => {
                const action = shortcuts[url];
                action(req, res);
                res.send(202);
            });
        });
        this._heartBeat.BlinkBluePillsLeds();
        this._flows.forEach(f => f.Init());
        server.get('/detach', (req, res) => {
            this._boards.forEach(b => b.Connector.Disconnect());
            res.send(200);
        });
        const port = 5000;
        server.listen(port, () => console.log('HCC SERVER STARTED @', port));
    }
};
Main = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.multiInject(Types_1.Types.IBoard)),
    __param(1, inversify_1.multiInject(Types_1.Types.IFlow)),
    __metadata("design:paramtypes", [Array, Array, Lights_1.Lights,
        DateTimeProvider_1.DateTimeProvider,
        HeartBeat_1.HeartBeat])
], Main);
exports.Main = Main;
//# sourceMappingURL=Main.js.map