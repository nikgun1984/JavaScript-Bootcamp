function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    
    while (left < right) {
        
        let sum = arr[right]+arr[left];
        
        if (sum == 0) {
            return [arr[left],arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-2,-1,0,1,2,3,10]));

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    let j = 1;
    while(j<arr.length){
        if(arr[i]==arr[j]){
            j++;
        } else{
            i++;
            arr[i]=arr[j]
        }
       
    }
    return i+1
  }

  console.log(countUniqueValues([1,1,1,1,1,2]));
  console.log(countUniqueValues([]));


  function maxSubarraySum(arr,num){
      if (arr.length < num){
          return null;
      }
      let maxSum = 0;
      let tempSum = 0;

      for(let i=0;i<num;i++){
          maxSum += arr[i];
      }

      tempSum = maxSum;

      for(let i=num;i<arr.length;i++){
          tempSum = tempSum - arr[i-num]+arr[i];
          maxSum = Math.max(maxSum,tempSum);
      }
      return maxSum;
  }

  console.log(maxSubarraySum([2,3,5,7,4,3,8,6,4],3));