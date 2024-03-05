/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head)return head;
    let len =1;
    let tail = head;
    while(tail.next){
        tail = tail.next;
        len++;
    }
    tail.next = head;
    console.log(len%k,len);
    let count = len - (k % len);
    console.log("count::",count);
    while(count>0){
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;
    
};