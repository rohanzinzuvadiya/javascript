// Custom map method
function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // Custom filter method
  function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Example usage:
  let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  let squaredNumbers = myMap(arr, (el) => Math.pow(el, 2));
  console.log(squaredNumbers); // [100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]
  
  let evenNumbers = myFilter(arr, (el) => el % 2 === 0);
  console.log(evenNumbers); // [10, 12, 14, 16, 18, 20]