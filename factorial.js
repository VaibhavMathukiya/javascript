var number = 5;
if (number < 0) {
    console.log('Error');
}
else if (number === 0) {
    console.log('the factorial of ${number} is 1.');
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;

    }
    console.log(fact);
}