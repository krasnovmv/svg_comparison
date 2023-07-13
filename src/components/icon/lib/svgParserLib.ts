// @ts-nocheck
// https://raw.githubusercontent.com/kiliman/rmx-cli/main/src/libs/svg-parser.ts

import fs from 'node:fs';
import path from 'node:path';
import * as svgo from 'svgo';

/**
 * Library for generating SVG sprites (using symbol technique)
 *
 * @author Jan Suwart
 * @licence MIT
 */
const svgParserLib = {
    fgRed: '\x1b[31m',
    fgGreen: '\x1b[32m',
    fgYellow: '\x1b[33m',
    fgReset: '\x1b[0m',

    /**
     * @param {string} file - full path of current file
     * @param {string} name - name of current file
     * @return {string} the created symbol element as string
     */
    createSymbol: (file: string, name: string): string => {
        if (!file || !name) {
            throw new Error('No file found at ' + name)
        } else if (!file.includes('<svg')) {
            throw new Error('No SVG node found in ' + name)
        }

        return file
            .replace(/<\?xml.*?\?>/, '')
            .replace(/ id=".*?"/, '')
            .replace(/ version=".*?"/, '')
            .replace(/ xmlns=".*?"/, '')
            .replace(/ xmlns:xlink=".*?"/, '')
            .replace('<svg', `<symbol id="${name}"`)
            .replace('</svg>', '</symbol>\n')
    },

    /**
     * Removes fill and stroke attributes while preserving fill="none" to allow hollow elements
     * @param {string} svg - input SVG as string
     * @return {string} stripped SVG as string
     */
    stripProperties: (svg: string): string => {
        const strokeFill = /\s+(stroke|fill)="((?!(none|currentColor)).*?)"/gim
        const widthHeight = /\s+(width|height)=".*?"/gim
        return svg
            .replace(strokeFill, ' $1="currentColor"')
            .replace(widthHeight, '')
    },

    // makeSolid: svg => {
    //     return svg.replace(/fill="none"/g, 'fill="currentColor"')
    // },

    /**
     * Wraps the passed elements string into an SVG structure
     * @param {string} elements - concatenated symbols
     * @return {string}
     */
    wrapInSvgTag: (elements: string): string => {
        return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">\n${elements}</svg>\n`
    },

    /**
     * Iterates the file array, retrieves each file and applies lib functions
     * @param {{name: string, path: string}[]} files - List containing file references and names
     * @param {object} [svgConfig] - config for svgo optimizations
     * @return {{elementsChanged: number, svgElement: string}} final SVG sprite as string
     */
    iterateFiles: (files: string[], svgConfig: svgo.Config): { elementsChanged: number; svgElement: string; } => {
        let svgElement = ''
        let elementsChanged = 0

        files.forEach(file => {
            let name = path.basename(file, '.svg')
            try {
                let svg = fs.readFileSync(file, 'utf8')
                let svgOptimized = svgo.optimize(svg, {
                    ...svgConfig,
                    path: name,
                })
                let symbolEl = svgParserLib.createSymbol(svgOptimized.data, name)
                symbolEl = svgParserLib.stripProperties(symbolEl)

                svgElement += symbolEl
                elementsChanged++
            } catch (e) {
                console.warn(
                    svgParserLib.fgRed + 'Could not parse',
                    name,
                    'because of error:' + svgParserLib.fgReset,
                    e.message,
                    '- file skipped!',
                )
            }
        })

        return {svgElement, elementsChanged}
    },

    /**
     * Writes the string into a folder
     * @param {string} fullFileName - folder and filename
     * @param {string} outputString - the output that should be written
     * @return {Promise} holding the written error if failed, true otherwise
     */
    writeIconsToFile: (fullFileName: string, outputString: string): Promise<void> => {
        if (!fs.existsSync(path.dirname(fullFileName))) {
            fs.mkdirSync(path.dirname(fullFileName), {recursive: true})
        }
        return fs.writeFileSync(fullFileName, outputString, 'utf8', {flag: 'w'})
    },

    /**
     * Reads the directory and returns array of files that match filetype (i.e. '.svg')
     * @param {string} dirname - full directory name relative to the working directory of the script
     * @param {string} filetype - substring that the file should be tested for, i.e. '.svg'
     * @return {Promise} containing the file list as an array
     */
    readDirectory: (dirname: string, filetype: string = '.svg'): string[] => {
        let fileList: string[] = []
        const files = fs.readdirSync(dirname, {withFileTypes: true});
        files.forEach(file => {
            if (file.isFile() && file.name.endsWith(filetype)) {
                fileList.push(`${file.path}/${file.name}`)
            }
        })
        return fileList;
    },
}

export {svgParserLib as svgParser}
