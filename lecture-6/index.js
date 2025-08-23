// let str = "javascript is awesome!"
// console.log("original string ' " + str + " ' ")

// // length 
// console.log("length: " + str.length) // include spaces

// //2.trim 
// console.log("trim: ", str.trim()) // remove spaces from starting and end

// // 3. uppercase
// console.log(str.toUpperCase())

// // 4. lowercase
// console.log(str.toLowerCase())

// // 5. includes
// console.log("includes 'awesome ' :", str.includes("awesome"))

// // 6. startWith
// console.log("startsWith 'java': ", str.startsWith("java"))

// // 7. endsWith
// console.log("endsWith '!':", str.endsWith("!"))

// // 8. indexOf 
// console.log("indexOf 'is' :", str.indexOf("is"))

// // 9. lastIndexOf
// console.log("lastIndexOf 'a' :", str.lastIndexOf(" a"))

// // 10. charAt
// console.log("character at index 5: ", str.charAt(5))

// // 11. substring
// console.log("subString from index 2 to 10 :", str.substring(2, 10))

// // 12. slice
// console.log("slice from index 2 to -1:",str.slice(2, -1)) // if end is negative, it counts backward from the end of the string.

// // 13. split with trim
// console.log("use of two method 'trim and split' at same time : ", str.trim().split(" "))

// //14. replace
// console.log("replace 'awesome' with 'replace':",str.replace("awesome", "powerful"))

// // 15. repeat
// console.log("repeat 'js' :","js ".repeat(3))

let str = "aaabbbbcccc"  //a3b4c4
let result = "";
let count = 1;

for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
        count++;
    } else {
        result += str[i - 1] + count;
        count = 1;
    }
}
console.log(result)

// // remove duplicate
// let result1 = str[0];  
// for (let i = 1; i < str.length; i++) {
//   if (str[i] !== str[i - 1]) {
//     result1 += str[i];
//   }
// }

// console.log(result1);  // Output: "abc"

// 2. remove duplicate 


let result1 = "";

for (let i = 0; i < str.length; i++) {
  if (!result1.includes(str[i])) {
    result1 += str[i];
  }
}

console.log(result1);  // Output: "abc"

// 🔍 find() = first match

// 🧹 filter() = all matches

// ❓ some() = any match → true

// ✅ every() = all must match

// 🔁 map() = transform each item

// 🧮 reduce() = combine all to one

// 🎯 filter() = remove unwanted items

// ✅ Summary Notes
/*
  find()   → Returns the first element that matches
  filter() → Returns an array of all matching elements

  some()   → Returns true if at least one element matches
  every()  → Returns true only if all elements match

  map()    → Transforms each element and returns a new array
  filter() → Selects elements based on a condition (new array)
  reduce() → Combines all elements into one single value
*/

