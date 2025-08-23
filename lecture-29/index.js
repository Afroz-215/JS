// const obj = {
//     name: "sam",
//     lastName: "vohra"
// }
// let obj1 = {
//     ...obj,
//     age: 34
// }
// console.log(obj1)

// let arr = [1, 2, 3, 4, 5, 7]
// let arr1 = [7, 8, 8, 9, 0, ...arr]
// console.log(arr1)

// function sum(...data) {
//     console.log(data)
// }
// sum(1, 3, 7, 8, 90, 23, 67, 89)


// Destructuring --


// const obj = {
//     name: "sam",
//     lastName: "vohra",
//     id: 1,
//     age: 23
// }

// let {id,age} =obj
// console.log(age,id)

// let arr=[1,2,3,4,5,6]
// let [a,b,c]=arr
// console.log(a,b,c)

// // first class function ---


// let sum =function(){
//     console.log("hii")
// }
// sum()

// pure func

// function add(a,b){
//     return a+b
// }

// console.log(add(2,7))

// //impure func

// let count = 0;
// function increment(){
//     count++;
//     return count
// }

// console.log("imure func",increment())
// console.log("imure func",increment())
// console.log("imure func",increment())

// function currying

// function add(a){
//     return function(b){
//         console.log(a+b)
//     }
// }


// add(2)(3)

import {user,share} from './home.js'
import a from './home.js'
console.log(user)
share(2,9)