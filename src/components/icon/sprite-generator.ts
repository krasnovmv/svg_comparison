import fs from 'node:fs';
import {svgParser} from "./lib/svgParserLib.ts";
import path from "node:path";

const folder = './icons';

async function run() {
    // sprite generation
    const files = svgParser.readDirectory(folder, '.svg');
    let {svgElement} = svgParser.iterateFiles(files, {})
    svgElement = svgParser.wrapInSvgTag(svgElement)
    await svgParser.writeIconsToFile('./images/sprite.svg', svgElement)

    // const.ts generation with helpful types
    const output = files.map(file => `    "${path.basename(file, '.svg')}"`).join(',\n');
    fs.writeFileSync('./const.ts', 'export const icons = [\n' + output + '\n] as const;\nexport type IconName = keyof typeof icons;\n');
}

run();
