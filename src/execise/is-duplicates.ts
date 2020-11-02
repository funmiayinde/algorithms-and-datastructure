/**
 * Implements a function called, areThereDuplicates
 * which accepts a variable number of arguments, and checks
 * whether there are any duplicates amoung the arguments
 * passed in.
 * 
 * Exampes: 
 * isDuplicate(1,2,3); // false
 * isDuplicate(1,2,3); // true
 * isDuplicate('a', 'b', 'c', 'a'); // true
 */

 /**
  * @param {any} args
  * @return {boolean}
  */
 const isDuplicate = (...args: any) => {
     let collection: any = {};
     for (let val in args) {
         collection[args[val]] = (collection[args[val]] || 0) + 1;
     } 
     for (let key in collection) {
         if (collection[key] > 1) {
             return true;
         }
     }
     return false;;
 };

 export default isDuplicate;