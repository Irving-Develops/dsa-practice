/*
Write a
function, linkedListFind, that takes in the head of a linked 
list and a target value.The function should
return a boolean indicating whether or not the linked list contains the target.
*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedListFind = (head, target) => {
    // todo
    while (head !== null) {
        if (head.val === target) return true
        head = head.next
    }
    return false
};