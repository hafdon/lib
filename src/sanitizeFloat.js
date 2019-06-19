const sanitizeFloat = function(n) {
    return isNaN(parseFloat(n, 10)) ? 0 : parseFloat(n, 10)
}

module.exports = sanitizeFloat
