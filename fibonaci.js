function fibonaci(num) {
    var a = 0;
    var b = 1;
    var c;
    var i = 6;
    while (i < num) {
        c = a + b;
        a = b;
        b = c;
        i = i + 1;
    }
    return b;
}

var num = 13;
ans = fibonaci(num);
console.log("the 13 term of the fibonaci series is: ", ans);