// console.log(5 + 5)
// console.log(5 + "5")
// console.log(5 - "5")
// // && 
// console.log(true && false && true && false)
// console.log(true  false  true  false)
// console.log(true && false)



// // 5 => 101
// // 4 => 100
// console.log(5 & 4) // 100 => 4

// // These values are treated as false in boolean contexts:

// // false
// // 0
// // "" (empty string)
// // null
// // undefined
// // NaN
// // Everything else is truthy

// let isBool
// if (isBool) console.log("hello")
// else console.log("hii")


// // The bitwise AND operator (&) compares two numbers bit by bit and returns a number where each bit is 1 only if both corresponding bits in the operands are 1
// // 0101  (binary for 5)
// // & 0011  (binary for 3)
// // --------
// // 0001  (result)

// // The result is 0001 in binary, which is 1 in decimal


// if (5 & 3) console.log("hello")
// else console.log("hii")

// // let data =prompt("enter your name")
// // console.log(data)

// // even odd no 
// let num = Number(prompt("enter a number"))
// if (num % 2 == 0) console.log("even number")
// else console.log("odd number")

// isBool = true
// isBool ? console.log("hello") : console.log("hii")


// // if else if else 

// let n = 10;

// if (n > 0) {
//     console.log("The number is positive");
// } else if (n < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }

// let str = "123";
// let val = +str;

// // The + operator in front of the 
// string "123" forces JavaScript to convert 
// it to the number 123.

// // The result is now a number, not a string.

// console.log(val);  // Output: 123
// console.log(typeof val);

// console.log(5+"hello")
// console.log(typeof(5+"hello"))
// console.log(5-"hello")

// console.log(typeof(NaN))

// let name1 ="aanya"
// let name2 ="afroz"
// let name3 ="anuradha"

// // non-primitive datatype
// // is collection of primitive datatype

// const std ={
//     name1:"anya",
//     name2:"afroz",
//     name3:"anuradha",
//     age: 23
// }
// std.age =27
// console.log(std.name2)
// console.log(std.age)

// console.log({} == {})

// let a ={name:"ritik"}
// let b= {name:"ritik"}
// let c =a

// console.log(a == b)
// console.log(a == c)