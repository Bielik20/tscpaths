"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const resolve_paths_1 = require("./resolve-paths");
function command() {
    program
        .version('0.0.1')
        .option('-p, --project <file>', 'path to tsconfig.json')
        .option('-s, --src <path>', 'source root path')
        .option('-o, --out <path>', 'output root path');
    program.on('--help', () => {
        console.log(`
  $ tscpath -p tsconfig.json
`);
    });
    program.parse(process.argv);
    resolve_paths_1.resolvePaths(program);
}
exports.command = command;
//# sourceMappingURL=command.js.map