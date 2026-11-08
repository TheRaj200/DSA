// method 1 : using linear search
var mySqrt = function(x) {

    let i =1

    while(i*i<=x){

        if(i*i==x) return i;

        i++;
    }

    return i-1
    
};


// method 2 : using binary search
var mySqrt = function(x) {
 let first = 1 , last = x , ans = 0;

  while(first<=last){

    let mid = Math.floor((first+last)/2);

    if(mid<=Math.floor(x/mid)){
        ans = mid;
        first = mid+1
    }else last = mid-1
  }
    return ans
};