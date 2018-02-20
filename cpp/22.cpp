class Solution {
#include<set>
public:
    string addStringin(string s,int n){
        return s.insert(n,"()");
    }
    vector<string> generateParenthesis(int n) {
        set<string> ans;
        vector<string> tans;
        set<string>::iterator iter;
        if(n==0) return tans;
        n--;
        string source = "()";
        ans.insert(source);
        for(int i = 0; i < n; i++){
            set<string> anst;
            for(iter = ans.begin(); iter != ans.end(); iter++){
                string t = *iter;
                int len = t.length();
                for(int j = 0; j <= len; j++){
                    anst.insert(addStringin(t,j));
                }
            }
            ans = anst;
        }
        for(iter = ans.begin(); iter != ans.end(); iter++){
            tans.push_back(*iter);
        }
        return tans;
    }
};