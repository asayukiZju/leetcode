/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var analyse = function(p){
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
    if(p==".*") return true;
    if(s===p) return true;
    if(p=="") return false;
    var plist;
    plist = analyse(p);
    var i = 0;
    var j = 0;
    var tp = new Array();
    var overj = 0;
    for(var k=plist.length-1;k>0;k--){
        if(plist[k].n!=0) {overj=k; break;}
    }
    while(1){
        if(i>=s.length){
                if(j>=plist.length) return true;
                if((j>=overj)&&(plist[j].n==0)){
                    return true;
                }
                           if(tp.length>0){var poptp=tp.pop(); i=poptp.i;j=poptp.j;
				for(var k=0;k<plist.length;k++){
					plist[k].n=poptp.plist[k];
				}
				continue;
			}
                else return false;
        }
        if(j>=plist.length) {
                    if(tp.length>0){var poptp=tp.pop(); i=poptp.i;j=poptp.j;
				for(var k=0;k<plist.length;k++){
					plist[k].n=poptp.plist[k];
				}
				continue;
			}
            else return false;
        }
        var na = plist[j].a;
        var nn = plist[j].n;
        var tc = "";
        if(nn==-1){
            if(na=='.') {i++;j++;continue;}
            if(s[i]==na) {i++;j++;continue;}
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
        
        else if(nn==0){
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
        
        else if(nn>0){
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