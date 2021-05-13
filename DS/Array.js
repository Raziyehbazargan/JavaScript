/*Merge Two Sorted Arrays 
Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).
Input: Two sorted arrays.
Output: A merged sorted array consisting of all elements of both input arrays.

Time: O(n + m)
Space: O(n + m)
*/

function mergeArrays(arr1, arr2) {
    //using spread operator and sort : return [...arr1, ...arr2].sort((a,b) => a - b);

    if (arr1 == null && arr2 == null) return null;
    if (arr1 == null || arr1.length == 0) return arr2;
    if (arr2 == null || arr2.length == 0) return arr1;

    let mergedArrays = [],
        p1 = 0, 
        p2 = 0;

    while (p1 < arr1.length && p2 < arr2.length) {
        let element = arr1[p1] <= arr2[p2] ? arr1[p1++] : arr2[p2++];
        mergeArrays.push(element);
    }

    while (p1 < arr1.length) {
        mergedArray.push(arr1[p1++]);
    }

    while (p2 < arr2.length) {
        mergedArray.push(arr2[p2++]);
    }

    return mergedArrays;
}


/*
Find Two Numbers that Add up to "value"
Time: O(nlogn)
Space: O(1)
*/
function findSum(arr, value) {
  if (arr == null || arr.length <= 1) return false;
  arr.sort((a, b) => a - b);
  let start = 0,
      end = arr.length - 1,
      n = arr.length,
      sum = 0;
  
    while (start < end) {
        sum = arr[start] + arr[end];
        if (sum == value) return [start, end];

        if (sum < value) start++;
        else end--;
    }

  return false;
}


/*
Given an array, return an array where each index stores the product of all numbers in the array except the number at the index itself.

Input:  arr = [1,2,3,4]
Output: arr = [24,12,8,6]
Time: o(n^2)
Space : O(n)
*/

function findProduct(arr) {
    if (arr == null || arr.length <= 2) return arr;
    /*let result = [],
        left = 1,
        currentProduct = 0;
    
        for (let i = 0; i < arr.length; i++) {
            currentProduct = 1;
            for (let j = i + 1; j < arr.length; j++) {
                currentProduct *= arr[j];
            }

            result.push(left * currentProduct);
            left *= arr[i];
        }

        return result;*/

        var temp = 1,
        product = [];
        for (var i = 0; i < arr.length ; i++) {
            product[i]  = temp;
            temp = temp * arr[i];
        }

        temp = 1;
        for (var i = arr.length - 1; i > -1; i--) {
            product[i] *= temp;
            temp *= arr[i];
        }
        return product;
}

/*
 Find First Unique Integer in an Array
 Time: O(n^2)
*/
function findFirstUnique(arr){
    if (arr == null || arr.length == 0) return null;
    let isUnique = false;
    for (let i = 0; i < arr.length; i++) {
        isUnique = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) return arr[i];
    }

    return null;
}
    
/*
Implement a function rightRotate(arr,n) that will rotate the given array by n
Time: O(n)
Space: O(k) => k is number of rotation
*/
function rightRotate(arr,n) {
    // return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))

    if (arr == null || arr.length <= 1) return arr;
    let rotateCount = n % arr.length,
        tempArray = arr.slice(arr.length - rotateCount);
  
    for (let index = (arr.length - rotateCount) - 1; index >= 0; index--) {
      arr[index + rotateCount] = arr[index];
    }
  
    for (let index = 0; index < rotateCount; index++) {
      arr[index] = tempArray[index];
    }
  
    return arr; 
  }

  /*
Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, 
and all positive elements appear at the right. (zero is positive)

Input:  [10,-1,20,4,5,-9,-6]
Output: [-1,-9,-6,10,20,4,5]
  */

function reArrange(arr) {
    if (arr == null || arr.length <= 1) return arr;
    let left = 0,
        right = arr.length - 1;
    
    while (left < right) {
      while (left < right && arr[left] < 0) left++;
      while (right > left && arr[right] >= 0) right--;
      swap (arr, left, right);
    }
    return arr;
  }
  
function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }


  /*
  Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the 
  first position will have the largest number, the second will have the smallest, and the third will have 
  the second-largest and so on. In other words, all the odd-numbered indices will have the largest numbers 
  in the array in descending order, and the even-numbered indices will have the smallest numbers in ascending order.
  Input: sorted array [1,2,3,4,5]
  Output: [5,1,4,2,3]
  */

  function maxMin(arr){
    if (arr == null || arr.length == 0) arr;
    let result = [],
        left = 0,
        right = arr.length - 1,
        isRight = true
        elementToWrite = 0;
    
    while (left <= right) {
      elementToWrite = isRight ? arr[right--] : arr[left++];
      result.push(elementToWrite);
      isRight = !isRight;
    }
  
     return result;
  }