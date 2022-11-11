var i, j, n = 5;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        if (i == n || j == 1 || j == i) {
            console.log("* ");
        }
        else {
            console.log(" ");
        }
    }
    console.log("\n");
}