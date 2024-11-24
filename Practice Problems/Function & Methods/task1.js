/*Qs1. Create a function using the function keywords
that takes a strings as an argument & returns
the number of vowels in the strings.*/
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}
countVowels('a');
countVowels('hello');
countVowels('type');