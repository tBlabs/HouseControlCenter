"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sequencer {
    constructor() {
        this.seq = [];
    }
    Step(value, delay) {
        this.seq.push([value, delay]);
        return this;
    }
    // IDEA: range with the function instead of step
    Range(from, to, step, delay) {
        if (from < to)
            for (let i = from; i <= to; i += step) {
                this.seq.push([i, delay]);
            }
        else
            for (let i = from; i >= to; i -= step) {
                this.seq.push([i, delay]);
            }
        return this;
    }
    Start(n = 0) {
        var _a;
        if (n === this.seq.length) {
            (_a = this.OnEnd) === null || _a === void 0 ? void 0 : _a.call(this);
            return;
        }
        let delay = this.seq[n][1];
        this.timer = setTimeout(() => {
            var _a;
            let value = this.seq[n][0];
            delay = this.seq[n][1];
            (_a = this.OnChange) === null || _a === void 0 ? void 0 : _a.call(this, value, delay);
            n += 1;
            this.Start(n);
        }, delay);
    }
    Break(valueAtEnd) {
        var _a, _b;
        clearTimeout(this.timer);
        (_a = this.OnChange) === null || _a === void 0 ? void 0 : _a.call(this, valueAtEnd, 0);
        (_b = this.OnEnd) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    get _Sequence() {
        return this.seq;
    }
}
exports.Sequencer = Sequencer;
//# sourceMappingURL=Sequencer.js.map