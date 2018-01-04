/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var analyse = function(p){//将传入的正则表达式转换成数组 a表示字母或通配符 n为-1表示固定为一个 大于等于0的参数表示大于等于n个
    var ylist = new Array();
    for(var i = 0;i < p.length;i++){
        if(p[i+1] == '*') {ylist.push({a:p[i],n:0});continue;}
        if(p[i] == '*') {continue;}
        ylist.push({a:p[i],n:-1});
    }
    for(var i = 0;i < ylist.length;i++){
        if(ylist[i+1] && ylist[i].a == ylist[i+1].a){
            if(ylist[i].n == -1) var ta = 1; else ta = ylist[i].n;
            if(ylist[i+1].n == -1) var tb = 1; else tb = ylist[i+1].n;
            if(ylist[i].n>=0||ylist[i+1]>=0){
                ylist[i].a = "";
                ylist[i+1].n = ta+tb;
            }
        }
    }
    var result = new Array();
    for(var i = 0;i < ylist.length;i++){
        if(ylist[i].a!=""){
            result.push(ylist[i]);
        }
    }
    return result;
}
                    
var isMatch = function(s, p) {
	//先return了几种显然的情况
    if(p==".*") return true;
    if(s===p) return true;
    if(p=="") return false;
	//得到正则表达参数列表
    var plist;
    plist = analyse(p);
	//这里是用来记录状态的 i 表示当前在校验字符下标 j表示当前在校验的正则参数
    var i = 0;
    var j = 0;
	//tp是一个堆栈 记录选择分支状态
    var tp = new Array();
    var overj = 0;
	//结束的最小j值
    for(var k=plist.length-1;k>0;k--){
        if(plist[k].n!=0) {overj=k; break;}
    }
	
	//在死循环中进行操作
    while(1){
        if(i>=s.length){//遍历完i之后的操作
                if(j>=plist.length) return true;//如果j也正好遍历完了 true
                if((j>=overj)&&(plist[j].n==0)){
                    return true;//如果j已经是在结束的最小值上了 而且当前的待处理字符的参数是0
                }
                if(tp.length>0){//如果栈里面有储存状态，那么就回档
					var poptp=tp.pop(); i=poptp.i;j=poptp.j;
					for(var k=0;k<plist.length;k++){
						plist[k].n=poptp.plist[k];
					}
					continue;//开始下一次判断
				}
                else return false;//返回错误值
        }
        if(j>=plist.length) {//如果字符串还没遍历完，j已经到头了 那么 也同样检查是否有储存状态 进行回档
            if(tp.length>0){
				var poptp=tp.pop(); i=poptp.i;j=poptp.j;
				for(var k=0;k<plist.length;k++){
						plist[k].n=poptp.plist[k];
					}
				continue;
			}
            else return false;
        }
        var na = plist[j].a;//当前字母/通配符
        var nn = plist[j].n;//当前数值参数
        var tc = "";//可跳字符串
        if(nn==-1){//当参数为1时 进行简单向下操作
            if(na=='.') {i++;j++;continue;}
            if(s[i]==na) {i++;j++;continue;}
            else {
                if(tp.length>0){
					var poptp=tp.pop(); i=poptp.i;j=poptp.j;
					for(var k=0;k<plist.length;k++){
						plist[k].n=poptp.plist[k];
					}
				continue;
				}
                else return false;
            }
        }
        
        else if(nn==0){//这里就是用来进行各种分支操作
            if(plist[j+1]){
            for(var k=j+1;k<plist.length;k++){
                tc = tc + plist[k].a;
                if(plist[k].n!=0) break;
            }
            }
            if(na=='.'){
                var indexd = tc.indexOf('.');
                var indexc = tc.indexOf(s[i]);
                var index = -1;
                if(indexd>-1&&indexc>-1){
                    index = indexd<indexc?indexd:indexc;
                }
                else if(indexd==-1&&indexc==-1){
                    index = -1;
                }
                else if(indexd==-1){
                    index = indexc;
                }
                else{
                    index = indexd;
                }
                if(index != -1){
                    var tplist = new Array();
					for(var k=0;k<plist.length;k++){
						tplist.push(plist[k].n);
					}
                    tp.push({i:i+1,j:j,plist:tplist.slice()});
                    {j=j+1+index;continue;}
                }
                else{
                    i++;
                    continue;
                }
            }else{
            if(s[i]==na){
                var indexd = tc.indexOf('.');
                var indexc = tc.indexOf(s[i]);
                var index = -1;
                if(indexd>-1&&indexc>-1){
                    index = indexd<indexc?indexd:indexc;
                }
                else if(indexd==-1&&indexc==-1){
                    index = -1;
                }
                else if(indexd==-1){
                    index = indexc;
                }
                else{
                    index = indexd;
                }
                if(index != -1){
                    var tplist = new Array();
					for(var k=0;k<plist.length;k++){
						tplist.push(plist[k].n);
					}
                    tp.push({i:i+1,j:j,plist:tplist.slice()});
                    {j=j+1+index;continue;}
                }
                else{
                    i++;
                    continue;
                }
            }
            else {j++;continue;}
            }
        }
        
        else if(nn>0){//单纯地消耗掉n次操作
            if(na=='.'||s[i]==na) {plist[j].n=plist[j].n-1;i++;continue;}
            else {
            if(tp.length>0){var poptp=tp.pop(); i=poptp.i;j=poptp.j;
				for(var k=0;k<plist.length;k++){
					plist[k].n=poptp.plist[k];
				}
				continue;
			}
            else return false;
        }
        }
    }

};