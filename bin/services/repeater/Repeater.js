"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repeater {
    static EverySecond(callback) {
        let i = 0;
        setInterval(() => {
            callback(i);
            i += 1;
        }, 1000);
    }
    static Every100ms(callback) {
        let i = 0;
        setInterval(() => {
            callback(i);
            i += 1;
        }, 100);
    }
}
exports.Repeater = Repeater;
//# sourceMappingURL=Repeater.js.map