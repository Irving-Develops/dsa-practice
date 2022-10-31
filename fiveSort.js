/*
Write a function, fiveSort, that takes in an array of numbers as an argument.The
function should rearrange elements of the array such that all 5 s appear at the end.Your
function should perform this operation in -place by mutating the original array.The
function should
return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5 s are at the end of the array.

*/

const fiveSort = (nums) => {

    let i = 0
    let j = nums.length - 1
    let placeholder = 0;
    while(j > i) {
        if(nums[j] === 5){
            j--
        }else if(nums[i] === 5){
            placeholder = nums[j]
            nums[i] = placeholder
            nums[j] = 5
            i++
        }else {

            i++
        }
    }
    return nums
};

console.log(fiveSort([5, 12, 5, 1, 5, 12, 7]))
// -> [12, 7, 1, 12, 5, 5] 