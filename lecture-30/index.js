// // let p1 =new Promise((res,rej)=>{
// //     res()
// // })
// // let p2 =new Promise((res,rej)=>{
// //     rej()
// // })
// // let p3 =new Promise((res,rej)=>{
// //     res()
// // })

// let p1 = new Promise(res => setTimeout(() => res("One"), 300));
// let p2 = new Promise(res => setTimeout(() => res("Two"), 200));
// let p3 = new Promise(res => setTimeout(() => res("Three"), 100));

// // Promise.all([p1,p2,p3]).then((values)=>{
// //     console.log(values)
// // })
// // Promise.allSettled([p1,p2,p3]).then((data)=>{
// //     console.log(data)
// // })
// // Promise.race([p1,p2,p3]).then((value)=>{
// //     console.log(value)
// // })
// Promise.any([p1,p2,p3]).then((value)=>{
//     console.log(value)
// })

// console.log("first")

// sum();
// var sum=(()=>{

// })

let a=4
a()