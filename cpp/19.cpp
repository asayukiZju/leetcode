/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if(head->next == NULL){
            return NULL;
        }
        ListNode *p = head;
        ListNode *q = head;
        for(int i = 0; i< n;i++){
            p = p->next;
            if(p==NULL) return head->next;
        }
        while(p->next!=NULL){
            p = p->next;
            q = q->next;
        }
        q->next = q->next->next;
        return head;
    }
};