'use strict'
const fs = require('fs-extra')
const log = require('debug')('readfile')

const Package = {
    error: Object,
    _error: Boolean,
    data: Object,
    datatype: String,
    filepath: String,
}

async function readfile(filepath) {
    let pkg = { ...Package }
    if (!filepath) {
        pkg.error = new Error(`No filename provided. (filepath: "${filepath}"`)
        pkg._error = true
    } else {
        try {
            pkg.filepath = filepath
            log.extend('filepath')(filepath)

            let filecontents = await fs.readFile(filepath, 'utf8')
            pkg.data = filecontents
            pkg.datatype = 'file:utf8'
        } catch (err) {
            log.extend('error')(err)
            pkg.error = new Error(err)
            pkg.error_help = 'If (Error: ENOENT: no such file or directory), did you make sure to use the absolute file path?'
            pkg._error = true
        }
    }
    return pkg
}

module.exports = readfile
