/* prompt 
Write a
function, compress, that takes in a string as an argument.The function should
return a compressed version of the string where consecutive occurrences of
 the same characters are compressed into the number of occurrences followed 
 by the character.Single character occurrences should not be changed.
*/


const compress = (s) => {
    // todo
    let i = 0;
    let j = 0;
    let str = []; //

    while (j <= s.length) {
        if (s[i] !== s[j] && j - i === 1) {
            str.push(s[i])
            i = j
            count = 0
        } else if (s[i] !== s[j]) {
            str.push(j - i)
            str.push(s[i])
            i = j
        }
        j++
    }
    console.log(str)
    return str.join('')
};

compress('ccaaatsss'); // -> '2c3at3s'