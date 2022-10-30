/* 
Write a function, pairSum, that takes in an array and a target sum as arguments.The
function should
return an array containing a pair of indices whose elements sum to the given target.The indices returned must be unique.

Be sure to
return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

*/

// const pairSum = (numbers, targetSum) => {
//     // todo
//     const sumPair = []
//     for (let i = 0; i < numbers.length; i++) {
//         let num1 = numbers[i]
//         for (let j = i + 1; j < numbers.length; j++) {
//             let num2 = numbers[j]
//             console.log(num1, num2)
//             if (num1 + num2 === targetSum) {
//                 sumPair.push(i, j)
//             }
//         }
//     }
//     if (sumPair.length === 0) return -1
//     return sumPair

// };

const pairSum = (numbers, targetSum) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetSum - num;
        if (complement in previousNums) 
        // console.log(complement, previousNums)
        return [i, previousNums[complement]];

        previousNums[num] = i;
    }
};

console.log(pairSum([3, 2, 5, 4, 1], 8))