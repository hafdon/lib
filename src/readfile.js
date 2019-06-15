'use strict'
const fs = require('fs-extra')
const log = require('debug')('readQuery')

const Package = {
    error: Object,
    _error: Boolean,
    data: Object,
    datatype: String,
}

async function readfile(filepath) {
    let pkg = { ...Package }
    try {
        log(filepath)

        let filecontents = await fs.readFile(filepath, 'utf8')
        pkg.data = filecontents
        pkg.data = 'file:utf8'
    } catch (err) {
        log.extend('error')(err)
        pkg.error = new Error(err)
        pkg._error = true
    }
    return pkg
}

module.exports = readfile
