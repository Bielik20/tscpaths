import * as program from 'commander';
import { resolvePaths } from './resolve-paths';
export function command() {
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
    resolvePaths(program);
}
//# sourceMappingURL=command.js.map