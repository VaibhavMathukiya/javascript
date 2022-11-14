const str = "sun rises in east";
const reverseWords = str => {
    let reverse = '';
    reverse = str.split(" ")
        .map(word =>{
            return word
                .split("")
                .reverse()
                .join("");
        })
        .join(" ");
        return reverse;
}
console.log(reverseWords(str))