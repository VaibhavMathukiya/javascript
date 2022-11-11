
for (let i = 2; i <= 50; i++) {
    let prime = true;
    for (let j = 2; j <= i - 1; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log(i);
}