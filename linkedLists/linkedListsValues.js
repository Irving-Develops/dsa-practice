class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  // todo
  const arr = []
  while(head !== null){
    arr.push(head.val)
    head = head.next
  }
  return arr
};