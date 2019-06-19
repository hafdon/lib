/* eslint-disable no-undef */
const assert = require('assert')
const { sanitizeInt } = require('../index')

describe('sanitizeInt', () => {
    it('should return 0 if given a letter ', () => {
        assert.equal(sanitizeInt('a'), 0)
    })
    it('should return 0 for NaN', () => {
        assert.equal(sanitizeInt(NaN), 0)
    })
    it('should return 5 for 5', () => {
        assert.equal(sanitizeInt(5), 5)
    })
    it('should return 23 for "023" ', () => {
        assert.equal(sanitizeInt('023'), 23)
    })
    it('should return 32 for "32px" ', () => {
        assert.equal(sanitizeInt('32px'), 32)
    })
})
