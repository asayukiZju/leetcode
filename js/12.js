/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   
    var loma =  ["I","II","III","IV","V","VI","VII","VIII","IX",
    "X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "M","MM","MMM"];
    var ans = "";
    var i = 0;
    while(num>0){
        var t = num%10;
        num = Math.floor(num/10);
        if(t>0){
            ans = loma[9*i+t-1]+ans;
        }
        i++;
    }
    return ans;
};