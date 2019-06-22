'use strict'
const fs = require('fs-extra')
//const log = require('debug')('readfile')

async function readfile(filepath, encoding = 'utf8') {
    let filecontents = ''
    if (!filepath) {
        throw new Error(`No filename provided. (filepath: "${filepath}"`)
    } else {
        try {
            filecontents = await fs.readFile(filepath, encoding)
        } catch (err) {
            throw new Error(err)
        }
    }
    return filecontents
}

module.exports = readfile
