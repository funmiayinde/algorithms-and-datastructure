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
const lengthOfLongestSubstring = (s: string) => {
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

export default lengthOfLongestSubstring;