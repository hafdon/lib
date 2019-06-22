/* eslint-disable no-undef */
const assert = require('assert')
const { readfile } = require('../index')

describe('readfile', () => {
    it('should return contents of file if filepath argument (with __dirname) is provided and file is found', async () => {
        const filepath = `${__dirname}/data/query1.sql`
        const data = 'select;'
        let filecontents = await readfile(filepath)
        assert.equal(filecontents, data)
    })
})
