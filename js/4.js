/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var avg = function(mid){
    return (mid[0]+mid[1])/2;
}
var ifin = function(mid1,mid2)
{
    if(mid1[0]>=mid2[0] && mid1[1]<=mid2[1]) return true;
    else return false;
}
var findmid = function(nums,l,r){
    var len = r-l+1;
    if(len%2==0) return [nums[(l+r-1)/2],nums[(l+r+1)/2]];
    else return [nums[(l+r)/2],nums[(l+r)/2]];
}
var findMedianSortedArrays = function(nums1, nums2) {
    var tnums1,tnums2;
    if(nums1.length<nums2.length){
        tnums1=nums1;
        tnums2=nums2;
    }
    else{
        tnums1=nums2;
        tnums2=nums1;
    }
    var l1,l2,r1,r2;
    l1=0;
    l2=0;
    r1 = tnums1.length-1;
    r2 = tnums2.length-1;
    if(r1==-1){
        if(r2==-1) return null;
        else return avg(findmid(tnums2,l2,r2));
    }
    while(1){
        var len1 = r1-l1+1;
        var len2 = r2-l2+1;
        var mid1 = findmid(tnums1,l1,r1);
        var mid2 = findmid(tnums2,l2,r2);
        if(len2==1) return (avg(mid1)+avg(mid2))/2;
        if(ifin(mid1,mid2)) return avg(mid1);
        if(ifin(mid2,mid1)) return avg(mid2);
        if(len1==1){
            if(len2%2==0){
                if(mid1[0]<mid2[0]) return mid2[0];
                else if(mid1[0]>mid2[1]) return mid2[1];
                else return mid1[0];
            }
            else{
                var midl = tnums2[(l2+r2)/2-1];
                var midr = tnums2[(l2+r2)/2+1];
                if(mid1[0]<midl) return (midl+mid2[0])/2;
                else if(mid1[0]>midr) return (midr+mid2[0])/2;
                else return (mid1[0]+mid2[0])/2;
            }
        }
        else if(mid1[0]>mid2[0]){
            var t;
            if(len1%2==0) t = len1/2;
                else t = (len1-1)/2;
            r1 = r1-t;
            l2 = l2+t;
        }
        else{
            var t;
            if(len1%2==0) t = len1/2;
                else t = (len1-1)/2;
            l1 = l1+t;
            r2 = r2-t;
        }
    }
};