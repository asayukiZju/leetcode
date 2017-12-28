/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var a = 0;
    var k = str.trim();
    if(parseInt(k)) a = parseInt(k);
    if(a>2147483647) a = 2147483647;
    if(a<-2147483648) a = -2147483648;
    return a;
};