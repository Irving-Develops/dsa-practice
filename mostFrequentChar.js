/* Write a function, mostFrequentChar, that takes in a string as an argument.The
function should
return the most frequent character of the string.If there are ties,
    return the character that appears earlier in the string.

You can assume that the input string is non - empty. */

const mostFrequentChar = (s) => {
    // todo
    let max = -Infinity
    const count = {}
    let res;

    let arr = s.split('')

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 1
        } else {
            count[char] += 1
        }
    }


    max = Math.max(...Object.values(count))


    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === max) {
            res = s[i]
            return res
        }
    }
    return res

};