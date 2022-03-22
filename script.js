function positiveSum(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if (arr[i] > 0){
        sum += arr[i];
      } 
    }
    return sum;
  }

  function opposite(number) {
    return -number;
  }
  
  function removeChar(str){
    return str.slice(1, -1);
    };
    
    function repeatStr (n, s) {
        return s.repeat(n);
      }


  module.exports = {positiveSum, opposite, removeChar, repeatStr}

