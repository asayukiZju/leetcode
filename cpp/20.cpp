#include <stack> 
class Solution {
public:
    bool isValid(string s) {
        int len = s.length();
        stack<int> a;
        int k;
        for(int i = 0; i < len; i++){
            if(s[i]=='('||s[i]=='['||s[i]=='{'){
                a.push(s[i]);
            }
            if(s[i]==')'||s[i]==']'||s[i]=='}'){
                if(a.size()==0) return false;
                k = a.top();
                a.pop();
                int t = s[i];
                if(t==')') t=t+1;
                if(k!=t-2){
                    return false;
                }
            }
        }
        if(a.size()==0) return true;
        else return false;
    }
};