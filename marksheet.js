var a = 69, b = 76, c = 88, d = 76, e = 94, f = 86, g = 77;
var t;
console.log("gujarati: 69");
console.log("english: 76");
console.log("computer: 88");
console.log("mathematic: 76");
console.log("science: 94");
console.log("sanskrit: 86");
console.log("social science: 77");

var t = (a + b + c + d + e + f + g) / 700 * 100;
console.log("Your percentage is: ", t);

if (t > 85 && t <= 100) {
    console.log("--You are pass with A1 grade--");
}
else if (t > 65 && t <= 85) {
    console.log("--You are pass with B1 grade--");
}
else if (t > 55 && t <= 65) {
    console.log("--You are pass with C1 grade--");
}
else if (t > 35 && t <= 55) {
    console.log("--You are pass with D1 grade--");
}
else {
    console.log("----You are fail----");
}