/* eslint-disable no-undef */
const assert = require('assert')
const { sanitizeFloat } = require('../index')

describe('sanitizeFloat', () => {
    it('should return 0 if given a letter ', () => {
        assert.equal(sanitizeFloat('a'), 0)
    })
    it('should return 0 for NaN', () => {
        assert.equal(sanitizeFloat(NaN), 0)
    })
    it('should return 5 for 5', () => {
        assert.equal(sanitizeFloat(5), 5)
    })
    it('should return 23 for "023" ', () => {
        assert.equal(sanitizeFloat('023'), 23)
    })
    it('should return 32 for "32px" ', () => {
        assert.equal(sanitizeFloat('32px'), 32)
    })
    it('should return 32.3 for "32.3px" ', () => {
        assert.equal(sanitizeFloat('32.3px'), 32.3)
    })
    it('should return 0.45 for "0.45" ', () => {
        assert.equal(sanitizeFloat('0.45'), 0.45)
    })
    it('should return 0.45 for "0.45" ', () => {
        assert.equal(sanitizeFloat('0.45'), 0.45)
    })
})
