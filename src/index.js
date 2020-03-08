module.exports = function reverse (n) {
    n = Math.abs(n) + '';
    let arr = n.split('').reverse();
    let str = '';

    for(let i=0; i<arr.length; i++) {
        str += arr[i];
    }

    return Number.parseInt(str);
}
