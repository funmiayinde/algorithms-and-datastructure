/**
 * Longest Consecutive Sequence
 *
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 *
 * For example,
 * Given [100, 4, 200, 1, 3, 2],
 * The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
 *
 * Your algorithm should run in O(n) complexity.
 */

/***
 * @param {number[]} nums
 * @return {number}
 */
 const longestConsecutive = (nums: number[]) => {
     let max: number = 0;

     const set: Set<any> = new Set();

     for (let i = 0;  i < nums.length; i++) {
         set.add(nums[i]);
     }

     console.log('set:', set);
    //  [100, 4, 200, 1, 3, 2],
     for (let i = 0; i < nums.length; i++) {
         let count:number = 1;

         let num = nums[i];
         console.log('before-set:', set);
         // check left side
         while(set.has(--num)) {
            count++;
            set.delete(num);
            console.log('updated-set:', set);
            // console.log('count:', count);
         }
         console.log('-----------------');
         num = nums[i];

         // check right side
        //  while(set.has(++num)){
        //      count++;
        //      set.delete(num);
        //  }
        //  max = Math.max(max, count);
     }
     console.log('last-set:', set);
     return max;
 };

 export default longestConsecutive;