import React from "react";
import { useState } from "react";
const SearchBox = (props) => {
  {
    const handleSearch = (event) => {
      props.setSearchString(event.target.value.toLowerCase());
      var compose = function(functions) {
       
        return function(x) {
          let result = x
          for (let i = functions.length - 1; i >= 0; i--) {
              result = functions[i](result)
          }
          return result;
      }
                
         
       
            
        }
     const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
     fn(1)
/**
 * var map = function(nums, fn, init) {
  if(init === 0) {
     return nums.reduce(sumofArray, 0); // Using 0 as the initial value for the sum
  } else if(nums.length === 0) {
     return nums.reduce(emptyArray, 25); // 25 as the initial value for the empty array case
  } else {
     return nums.reduce(calculateArray, 100); // 100 as the initial value for the other cases
  }
}

function sumofArray(sum, num) {
   return sum + num;
}

function emptyArray(sum, num) {
   return sum;
}

function calculateArray(sum, num) {
   return sum + num * num;
}


var nums = [1, 2, 3];
var nums1=[0];
console.log(map(nums1, sumofArray, 0))
console.log(map(nums, sumofArray, 0)); // Output: 6
console.log(map([], emptyArray, 25)); // Output: 25
console.log(map(nums, calculateArray, 100)); // Output: 114

 *
 */


// var map = function(arr, fn) {
//   return fn(arr);
// };
// var plusI=(arr)=>{
//   return arr.map((element, index) => element + index);
// }
// var plusOne=(arr)=>{
//   return arr.map((element) => element +1);
// }
// var constant=(arr)=>{
//   return arr.map(() => 42);
// }
// var arr=[1,2,3];
// console.log(map(arr,plusOne));
// console.log(map(arr,plusI));
// console.log(map(arr,constant));

    };
 
    return (
      <div className="searchField">
        <h2 className="Heading">Monster Rolodex</h2>
        <input
          className="search-box"
          type="search"
          placeholder=" Search Monsters 🔍"
          onChange={handleSearch}
        />
      </div>
    );
  }
};

export default SearchBox;
