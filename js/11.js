/**
 * @param {number[]} height
 * @return {number}
 */
var move = function(lr,i,j,nowminh,max,height){
	if(i>=j) return max;
	if(lr==0){
		var ni = i+1;
        if(height[ni]>=nowminh){
            var ta = (j-ni)* ((height[ni]<height[j])?height[ni]:height[j]);
                if(ta>=max){
                    var nmax = ta;
                    var nnowminh = (height[ni]<height[j])?height[ni]:height[j];
					var nlr = (height[ni]<height[j])?0:1;
                    return move(nlr,ni,j,nnowminh,nmax,height);
                }
				else{
					var nlr = (height[ni]<height[j])?0:1;
					return move(nlr,ni,j,nowminh,max,height);
				}
		}
		else return move(lr,ni,j,nowminh,max,height);
	}
	else{
		var nj = j-1;
        if(height[nj]>=nowminh){
            var ta = (nj-i)* ((height[i]<height[nj])?height[i]:height[nj]);
                if(ta>=max){
                    var nmax = ta;
                    var nnowminh = (height[i]<height[nj])?height[i]:height[nj];
					var nlr = (height[i]<height[nj])?0:1;
                    return move(nlr,i,nj,nnowminh,nmax,height);
                }
				else{
					var nlr = (height[i]<height[nj])?0:1;
					return move(nlr,i,nj,nowminh,max,height);
				}
		}
		return move(lr,i,nj,nowminh,max,height);
	}
}
var maxArea = function(height) {
    var i = 0;
    var j = height.length-1;
    var nowminh = (height[i]<height[j])?height[i]:height[j];
    var max = j * nowminh; 
	var lr = (height[i]<height[j])?0:1;
    max = move(lr,i,j,nowminh,max,height);
	return max;
};