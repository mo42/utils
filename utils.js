const u = (function () {
    return {
        id: function (d) { return d }
        not: function (f) { return function (d) { return !f(d) } }
    }
})()
