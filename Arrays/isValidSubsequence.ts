
//   Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one. A subsequence of an
//   array is a set of numbers that aren't necessarily adjacent in the array but that
//   are in the same order as they appear in the array. For instance, the numbers 
//   [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers 
//   [2, 4]. Note that a single number in an array and the array
//   itself are both valid subsequences of the array.

export function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
      let counter: number = 0;
      for(let i: number = 0; i < array.length; i++) {
          // loop through array
          // check if the number at array[i] is equal to the number at sequence[i]
          // continue checking up to the length of array
          // if all the numbers in sequence exist in array return true
          
          if(sequence[counter] === array[i]){
              counter++;
          };	
      };
      
      if(counter == sequence.length) {
          return true;
      } else {
          return false;
      };
  };
  