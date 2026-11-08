var myPow = function(x, n) {

    function power(x, n) {
        if(n === 0) return 1;

        let ans = power(x, Math.floor(n / 2));

        if(n % 2 === 0) {
            return ans * ans;
        } else {
            return ans * ans * x;
        }
    }

    if(n < 0) {
        return 1 / power(x, -n);
    }

    return power(x, n);
};