const sanitizeInt = function(n, returnValue = 0) {
    returnValue = isNaN(returnValue) ? NaN : returnValue

    // pass two arguments ; 10 is radix
    return isNaN(parseInt(n, 10)) ? returnValue : parseInt(n, 10)
}

module.exports = sanitizeInt
