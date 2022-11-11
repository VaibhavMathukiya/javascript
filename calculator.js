function calculator(a, b, op) {
    switch (op) {
        case '+':
            return a + b
            break;
        case '-':
            return a - b
            break;
        case '*':
            return a * b
            break;
        case '/':
            return a / b
            break;
        case '%':
            return a % b
            break;

        default:
            break;
    }
}
console.log(calculator(5,5,'*'));