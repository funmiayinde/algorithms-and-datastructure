/***
 * Write a function called maxSubarraySum which accepts an array
 * of integers and a number called N. The function should
 * calculate the maximum sum of N consecutive elements in
 * the array
 *
 * Example:
 *
 * maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
 * maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
 * maxSubArraySum([4,2,1,6], 1) // 6
 * maxSubArraySum([], 4) // null
 */

/**
 * @param {Array} arr
 * @param {Number} num
 */
const maxSubArraySum = (arr: number[], num: number) => {
  let maxSum: number = 0;
  let tempSum: number = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
// export default maxSubArraySum;

/***
*  Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
 * Follow up: If you have figured out the O(n) solution, 
 * try coding another solution using the divide and conquer approach, which is more subtle.
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums: number[]) => {
  // let max = nums[0];
  // let sum = 0;
  // // [-2,1,-3,4,-1,2,1,-5,4]
  // nums.map((x: number) => {
  //   sum < 0 ? (sum = x) : (sum += x);
  //   max = Math.max(max, sum);

  //   console.log('sum:', sum);
  //   console.log('max:', max);
  //   console.log('----------');
  // });
  // return max;

  for (let i = 1; i < nums.length; i++) {
    console.log('previous:', nums[i - 1]);
    console.log('next:', nums[i]);
    console.log('diff:', nums[i] + nums[i - 1]);
    console.log('---------');
    if (nums[i - 1] > 0) {
      nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
    }
  }
  return Math.max(...nums);
};

export default maxSubArray;