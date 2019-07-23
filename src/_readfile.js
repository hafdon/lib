'use strict'
const fs = require('fs-extra')

class ReadfileError extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, ReadfileError)
    }
}

class ArgumentRequiredError extends ReadfileError {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, ArgumentRequiredError)
    }
}

async function readfile(filepath, encoding = 'utf8') {
    let filecontents = ''
    if (!filepath) {
        throw new ArgumentRequiredError(
            `No path to file provided. (filepath: "${filepath}"`
        )
    }

    try {
        filecontents = await fs.readFile(filepath, encoding)
    } catch (e) {
        throw new ReadfileError(e)
    }
    return filecontents
}

module.exports = readfile

// 'use strict'
// const fs = require('fs-extra')
// const log = require('debug')('readfile')

// //const DATATYPE = ['file:utf8']

// const Package = {
//     error: Object,
//     _error: Boolean,
//     data: Object,
//     datatype: String,
//     filepath: String,
// }

// async function readfile(filepath) {
//     let pkg = { ...Package }
//     if (!filepath) {
//         pkg.error = new Error(`No filename provided. (filepath: "${filepath}"`)
//         pkg._error = true
//     } else {
//         try {
//             pkg.filepath = filepath
//             log.extend('filepath')(filepath)

//             let filecontents = await fs.readFile(filepath, 'utf8')
//             pkg.data = filecontents
//             pkg.datatype = 'file:utf8'
//         } catch (err) {
//             log.extend('error')(err)
//             pkg.error = new Error(err)
//             pkg._error = true
//         }
//     }
//     return pkg
// }

// module.exports = readfile
