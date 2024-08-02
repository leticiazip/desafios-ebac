//let x = 250
//let y = 64

function MDC(x, y) {
    let R;
    while ((x % y) > 0) {
        R = x % y;
        x = y;
        y = R;
    }
    return y;
}

//console.log(`O MDC entre ${x} e ${y} é`, MDC(x, y))

module.exports = { MDC }