"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const git = require("git-rev");
class Git {
    async Version() {
        return new Promise((resolve) => {
            git.short(s => resolve(s));
        });
    }
}
exports.Git = Git;
//# sourceMappingURL=Git.js.map