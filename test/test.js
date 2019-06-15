/* eslint-disable no-undef */
const assert = require('assert')
const { readfile } = require('../index')

describe('readfile', () => {
    it('should return _error:true if no filepath argument is provided', async () => {
        let pkg = await readfile()
        assert.equal(pkg._error, true)
    })
    it('should return _error:true if filepath argument is empty string', async () => {
        let pkg = await readfile('')
        assert.equal(pkg._error, true)
    })
    it('should return filepath if filepath argument is provided', async () => {
        const filepath = './data/query1.sql'
        let pkg = await readfile(filepath)
        assert.equal(pkg.filepath, filepath)
    })
    it('should return contents of file if filepath argument (with __dirname) is provided and file is found', async () => {
        const filepath = `${__dirname}/data/query1.sql`
        const data = 'select;'
        let pkg = await readfile(filepath)
        assert.equal(pkg.data, data)
    })
})
