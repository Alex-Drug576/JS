function padString(str, value, symbol, flag = true) {
    var result = '';
    if (str === undefined) return;
    if (flag) {
        for (var i = 0; value - str.length > i; i++) {
            result += symbol;
        }
        result += str;
    } else {
        for (var i = 0; value - str.length > i; i++) {
            result += symbol;
        }
        result = str + result;
    }
    return console.log(result);

}
padString('hello', 12, '*', true);
