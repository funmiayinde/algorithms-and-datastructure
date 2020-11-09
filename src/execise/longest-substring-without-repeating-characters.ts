/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 *
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 * Given "bbbbb", the answer is "b", with the length of 1.
 *
 * Given "pwwkew", the answer is "wke", with the length of 3.
 *
 * Note that the answer must be a substring, "pwke" is a  * subsequence and not a substring.
 */

 /**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string): number => {
    const set: Set<any> = new Set();
    let max: number = 0;

    for (let i = 0, j = 0; j < s.length; j++){
        while(set.has(s[j])){
            set.delete(s[i]);
            i++;
        }
        set.add(s[j]);
        max = Math.max(max, set.size);
    }
    return max;
};

// export default lengthOfLongestSubstring;

/***
 * Given two strings a and b, return the length of the longest common subsequence of the two strings.
 * A subsequence of a string is defined as deleting some or no characters of the original string 
 * without changing the order of the remaining characters.
 * 
 * Example 1
 * Input
 * a = "abcvc"
 * b = "bv"
 * Output: 2
 */
const lengthOfLongestSubstring2 = (a: string, b: string)  =>{
    let sets: Set<any> = new Set();
    let max = 0;
    for (let i = 0, j = 0; j < a.length; j++) {
        while(sets.has(a[j])) {
            sets.delete(a[j]);
            i++;
        }
        sets.add(a[j]);
    }
    console.log('sets:', sets);
    for (let i = 0; i < b.length; i++) {
        if (sets.has(b[i])){
            max++;
        }
    }
   return max;
}

export default lengthOfLongestSubstring2;