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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *dummy1 = new ListNode(0);
        ListNode *dummy2 = new ListNode(0);
        ListNode *dummya = new ListNode(0);
        dummy1->next = l1;
        dummy2->next = l2;
        ListNode *temp = dummya;
        while(dummy1->next!=NULL||dummy2->next!=NULL){
            int t1,t2;
            if(dummy1->next==NULL){
                t2 = dummy2->next->val;
                temp->next = new ListNode(t2);
                temp = temp->next;
                dummy2 = dummy2->next;
                continue;
            }
            if(dummy2->next==NULL){
                t1 = dummy1->next->val;
                temp->next = new ListNode(t1);
                temp = temp->next;
                dummy1 = dummy1->next;
                continue;
            }
            t1 = dummy1->next->val;
            t2 = dummy2->next->val;
            if(t1 < t2){
                temp->next = new ListNode(t1);
                temp = temp->next;
                dummy1 = dummy1->next;
            }
            else{
                temp->next = new ListNode(t2);
                temp = temp->next;
                dummy2 = dummy2->next;
            }
        }
        return dummya->next;
    }
};