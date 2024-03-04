function isPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return(n & (n-1))===0
}

console.log(isPowerOfTwoBitWise(16));
console.log(isPowerOfTwoBitWise(24));
console.log(isPowerOfTwoBitWise(1));

//Big-O = O(1)