const _ = {
    "once": once,
    "memoize": memoize
};

module.exports = _;

function once(func) {
    var x = false
    function reserve() {
        if (x) {
            return x
        } 
        x = func()
        return x
    }
    return reserve
}

function memoize(func, spec) {
    var obj = func;
    function reserve(n) {
        key = n
        if (spec) {
            key = spec(n)
        }
        if (! obj.hasOwnProperty(key)) {
            obj[key] = func(n);
        }
        return obj[key];
    }
    return reserve
}

