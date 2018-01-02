/**
 * @param {number} x
 * @return {number}
 */
var myAtoi = function(str) {
    var a = 0;
    var k = str.trim();
    if(parseInt(k)) a = parseInt(k);
    if(a>2147483647) a = 0;
    if(a<-2147483648) a = 0;
    return a;
};
var reverse = function(x) {
    var flag = 0;
    var zflag = 0;
    var ans = "";
    if(x<0) {ans="-"; x=-x;}
    var a = ""+x;
    
    for(var i=a.length-1;i>=0;i--){
        if(zflag == 0){
            if(a[i]!='0'){ 
                ans = ans+a[i];
                zflag=1;
            }
        }
        else{
            ans = ans+a[i];
        }
    }
    if(ans=="") return 0;
    return myAtoi(ans);
};