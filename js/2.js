/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var k = l1.val+l2.val;
    var t = new ListNode(k%10);
    var n = (k>9)?1:0;
    var a = t;
    var t1 = l1;
    var t2 = l2;
    while(true){
        if(t1.next==null&&t2.next==null) break;
        if(t1.next==null) t1.next = new ListNode(0);
        if(t2.next==null) t2.next = new ListNode(0);
        t1=t1.next;
        t2=t2.next;
        k = t1.val+t2.val+n;
        a.next = new ListNode(k%10);
        n = (k>9)?1:0;
        a = a.next;
    }
    if(n>0) a.next = new ListNode(1);
    return t;
};