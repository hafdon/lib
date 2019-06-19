const sanitizeInt = function(n) {
    return isNaN(parseInt(n, 10)) ? 0 : parseInt(n, 10)
}

module.exports = sanitizeInt
