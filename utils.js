const u = (function () {
    return {
        id: d => d,
        not: f => d => !f(d)
    }
})()
