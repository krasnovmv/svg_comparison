import fs from "node:fs";
import {svgParser} from "./lib/svgParserLib.ts";
import path from "node:path";
import type * as svgo from "svgo";
import {optimize} from "./lib/svgoptimize.ts";

const folder = "./icon-sources";

const svgoParams: svgo.Config = {};

async function run() {
    // sprite generation
    const files = svgParser.readDirectory(folder, ".svg");
    let {svgElement} = svgParser.iterateFiles(files, svgoParams);
    svgElement = svgParser.wrapInSvgTag(svgElement);
    await svgParser.writeIconsToFile("./images/sprite.svg", svgElement);

    // const.ts generation with helpful types
    const output = files
        .map((file) => `    "${path.basename(file, ".svg")}"`)
        .join(",\n");
    fs.writeFileSync(
        "./icon-const.ts",
        "export const icons = [\n" +
            output +
            "\n] as const;\nexport type IconName = keyof typeof icons;\n",
    );

    files.map((filePath) => {
        let name = path.basename(filePath, ".svg");
        let svg = fs.readFileSync(filePath, "utf8");
        let svgOptimized = optimize(svg, name, svgoParams);
        svgParser.writeIconsToFile(
            path.join("icons", `${name}.svg`),
            svgOptimized,
        );
    });
}

run();
