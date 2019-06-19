/**
 * Consider Number(value) for stricter parsing, which converts to NaN for values with such invalid characters regardless of position.
 */
const sanitizeFloat = function(n, returnValue = 0) {
    returnValue = isNaN(returnValue) ? NaN : returnValue

    // pass one argument to parseFloat ; always uses decimal radix
    return isNaN(parseFloat(n)) ? returnValue : parseFloat(n)
}

module.exports = sanitizeFloat
