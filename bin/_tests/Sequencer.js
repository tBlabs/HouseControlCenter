"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sequencer {
    constructor() {
        this.seq = [];
    }
    Break(valueAtEnd) {
        var _a, _b;
        clearInterval(this.t);
        (_a = this.OnChange) === null || _a === void 0 ? void 0 : _a.call(this, valueAtEnd, 0);
        (_b = this.OnEnd) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    Start() {
        console.log(this.seq);
        let n = 0;
        let i = this.seq[n][1];
        this.t = setInterval(() => {
            var _a, _b;
            console.log(n);
            let v = this.seq[n][0];
            i = this.seq[n][1];
            (_a = this.OnChange) === null || _a === void 0 ? void 0 : _a.call(this, v, i);
            if (n === this.seq.length - 1) {
                clearInterval(this.t);
                (_b = this.OnEnd) === null || _b === void 0 ? void 0 : _b.call(this);
            }
            n += 1;
        }, i);
    }
    Range(from, to, step, delay) {
        for (let i = from; i <= to; i += step) {
            this.seq.push([i, delay]);
        }
        return this;
    }
    get _Sequence() {
        return this.seq;
    }
    Step(value, delay) {
        this.seq.push([value, delay]);
        return this;
    }
}
exports.Sequencer = Sequencer;
//# sourceMappingURL=Sequencer.js.map