// let a =5
// function sum(){
//     return a
// }
// let b = sum()
// console.log(b)

// function outer(){
//     return [1,2]
// }
//  let  a=  outer()
//  console.log(a);

// var a=5
// function outer(){
//     function inner(){
//         console.log(a)
//     }
// //  inner
//     return inner()
// }
// let b = outer()
// b()

// console.log(a)
// var a =5


// console.log(a)
// let a =5

// sum()
// const sum=()=>{
//     console.log("hello")
// }

// console.log(a);    tdz
// const a=10;    =>>>>>>  const a 
//                          console.log(a);
//                           a=10


// console.log(a);
// let a=5
// let a
// console.log(a);
// a=5
// function sum(){
//     console.log("hehehehe");
    
// }
// sum()
// sum() 
// const sum=()=>{   
//     console.log("hello");  
// }  
// sum()
// var sum=()=>{
//     console.log("hehe");  =>>>>>>>>   var sum =undefined
//                                      sum()
//                                      sum=()=>{

//                                      }
     
// }    

// console.log(a);
// let a=10

  
// var a
// a()


// sum()
// function sum(){
//     console.log("hehe");     =>>>>    function sum(){

//                                         }  
//                                         sum()
    
// }

// sayHi(); //  TypeError
// let sayHi = function() {
//   console.log("Hi");
// };

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

// outer()
// outer()

const counter = outer();
counter(); // 1
counter(); // 2
