/***
 * Write a function called sameFrequency. Given two positive integers
 * find out if the two numbers have the same frequency of digits
 * 
 * Example
 * sameFrequency(182, 281); // true
 * sameFrequency(34, 14); false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 */

 /**
  * @param {Number} of num1,
  * @param {Number} of num2,
  * @return {Boolean}
  */
 const sameFrequency = (num1: number, num2: number) => {
     const str1 = String(num1);
     const str2 = String(num2);

     if (str1.length !== str2.length) return false;

     const lookup = {};

     for (let i = 0; i <  str1.length; i++){
         const letter = str1[i];
         lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
     }

     for (let i = 0; i <  str2.length; i++) {
         const letter = str2[i];
         if (!lookup[letter]){
             return false;
         }else {
             lookup[letter] -= 1;
         }
     }
     return true;
 };

 export default sameFrequency;