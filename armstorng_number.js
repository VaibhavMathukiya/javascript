let sum = 0;
var number = 153;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an armstorng number`);
}
else {
    console.log(`${number} is not an armstorng number`);
}