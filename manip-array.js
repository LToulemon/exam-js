function manipArray(arr) {
    if (arr.length == 0) return []
    return [arr.map(x => x * 2), arr.map(x => x - 5), arr.filter(x => x > 5)]
}

module.exports = manipArray