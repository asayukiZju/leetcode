/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var op={};
    var ng={};
    var zero = 0;
    for(let i=0;i<nums.length;i++){
        let t = nums[i];
        if(t>0){
            if(op[t]) op[t] = 2;
            else op[t] = 1;
        }
        else if(t<0){
            t = -t;
            if(ng[t]) ng[t] = 2;
            else ng[t] = 1;
        }
        else{
            zero++;
        }
    }
    var ans = new Array();
    if(zero >= 3){
        ans.push([0,0,0]);
    }
    if(zero>0){
        for(n in op){
            if(ng[n]){
                let t = parseInt(n);
                ans.push([t,0,-t])
            }
        }
    }
    var opl = new Array();
    var ngl = new Array();
    for(n in op){
        let t = parseInt(n);
        if(op[n] == 2){
            if(ng[t+t]) ans.push([-t-t,t,t]);
        }
        opl.push(t);
    }
    for(n in ng){
        let t = parseInt(n);
        if(ng[n] == 2){
            if(op[t+t]) ans.push([-t,-t,t+t]);
        }
        ngl.push(t);
    }
    for(let i=0;i<opl.length-1;i++){
        for(let j=i+1;j<opl.length;j++){
            let t = opl[i]+opl[j];
            if(ng[t]) ans.push([-t,opl[i],opl[j]]);
        }   
    }
    for(let i=0;i<ngl.length-1;i++){
        for(let j=i+1;j<ngl.length;j++){
            let t = ngl[i]+ngl[j];
            if(op[t]) ans.push([-ngl[i],-ngl[j],t]);
        }   
    }  
    return ans;
};