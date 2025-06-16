// // let step1 = function(){
// //     return new Promise((res,rej)=>{
// //         setTimeout(()=>{
// //             res("choose picture ")
// //         },5000)
// //     })
// // }

// // let step2 = function(){
// //     return new Promise((res,rej)=>{
// //         setTimeout(()=>{
// //             res("apply filter")
// //         },5000)
// //     })
// // }

// // //


// // step1().then((data)=>{
// //     console.log(data)
// //     return step2()
// // }).then((filter)=>{
// //     console.log(filter)
// // })

// // //    let promise=  new Promise((res,rej)=>{
// // //     // res()
// // //     // rej("errr")
// // //     res("hello")
// // //    })
// // //    promise.then((data)=>{
// // //     console.log(data);
// // //    }).catch((err)=>{
// // //     console.log(err);
// // //    })

// // let step1 = function () {
// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res("select a photo")
// //         }, 5000)
// //     })
// // }


// // let step2 = function () {
// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res("filterrrrr")

// //         }, 4000)
// //     })
// // }


// // let step3= function () {
// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res("captionn")

// //         }, 3000)
// //     })
// // }
// //callback hell => promise=> async await

// //    step1().then((data)=>{
// //     console.log(data);
// //        return step2()
// //    }).then((data1)=>{
// //     console.log(data1);
// //    })



// //  async  function  call(){
// //   let data=   await   step1()
// //   console.log(data);

// //     let data1=   await  step2()
// //     console.log(data1);
// // }
// // call()

// // Write a function `greet(name, callback)` that prints 'Hello, <name>' and then executes the callback
// //  after 2 seconds using setTimeout

// // function greet(name, callback) {
// //     setTimeout(() => {
// //         console.log(`Hello, ${name}`);
// //         callback();
// //     }, 2000)

// // }

// // greet("afroz", () => {
// //     console.log("done")
// // })


// //  Callback Hell:
// //  Convert the following nested callbacks into a Promise chain:



// //  setTimeout(() => {
// //   console.log('Step 1');
// //   setTimeout(() => {
// //     console.log('Step 2');
// //     setTimeout(() => {
// //       console.log('Step 3');
// //     }, 1000);
// //   }, 1000);
// //  }, 1000)



// //  step1().then((data)=>{
// //     console.log(data)
// //      return step2()
// //  }).then((data1)=>{
// //     console.log(data1)
// //      return step3()
// //  }).then((data2)=>{
// //     console.log(data2)
// //  })



//  function isEven(number){
//     return new Promise((res,rej)=>{
//         if(number%2==0){
//             res(`${number} is even number`)
//         }else{
//             rej("odd number")
//         }
//     })
//  }

//  isEven(5).then((data)=>{
//     console.log(data)
//  }).catch((err)=>[
//     console.log(err)
//  ])

//  let addNumber = function(number){
//     return new Promise((res,rej)=>{
//         res(number +10)
//     })
//  }

//  Create a Promise chain that adds 10 to a number, then multiplies it by 2, then subtracts 5. Each
//  operation should be in a separate .then()

//  addNumber(3).then((data)=>{
//     console.log(data)
//     return data *2;
//  })
//  .then((data1)=>{
//     console.log(data1)
//     return  data1-5
// })
//  .then((data2)=>{
//     console.log(data2)

//  })

// Promise.reject("Promise was rejected due to an error")
//   .catch((error) => {
//     console.log("Error caught:", error);
//   });

//  5. Handle Promise Error:
//  Given a rejected Promise, handle the error using .catch() and print the error message.

// function rejectedPromise(){
//     return new Promise((res,rej)=>{
//         rej("Promise was rejected due to an error")
//     })
// }

// rejectedPromise().catch((err)=>{
//     console.log(err)
// })



// 7. Convert the callback-based function `fetchData(callback)` into a function that returns a Promise.


// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("hello")
//         callback()
//     },1000)
// }
// fetchData(
//     ()=>{
//         console.log("done")
//     }
// )


// function fetchDataPromise(callback) {
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             res("hello")
//         },1000)

//     })
// }

// fetchDataPromise().then((data)=>{
//     console.log(data)
//     console.log("done")
// })

// Async/Await Syntax:
// 7. Create an async function that waits for 2 seconds and then logs: '2 seconds passed!' using await
//  and setTimeout

// function wait(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("2 sec passed")
//         },2000)
//     })
// }

// async function main(){
//     let a = await wait()
//     console.log(a)
// }

// main()




//  8. Async/Await with Try-Catch:
//  Use try...catch to handle errors in an async function. Example: getUserData() returns a rejected
//  Promise

// function getUserData(){
//     return new Promise((res,rej)=>{
//         let result = false;
//         if(result) res("resolved")
//             else rej("rejected")
//     })
// }

// async function main(){
//     try{
//         let data = await getUserData()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// main()

//  9. Realistic Promise Example (API Mock):
// Create an async function that mocks fetching user info using Promise.resolve after 1 second and
// logs the name.

// function fetch(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res ({
//                 name: "afroz",
//                 age:21,
//                 occupation: "student"
//             })
//         },1000)
//     })
// }

// async function main(){
//     let data =await fetch()
//     console.log(data.name)
//     console.log(data.age)
// }

// main()

// 10. Parallel Promises with Promise.all:
//  You have 3 API calls mocked with Promises. Use Promise.all to wait for all of them and log the
//  result


let API1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             console.log("API1 IS RESOLVED")
            resolve(" API1 resolved")
        }, 1000)
    })
}

let API2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API2 IS RESOLVED")
            resolve(" API2 resolved")
        }, 2000)
    })
}

let API3 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API3 IS RESOLVED")
            resolve(" API3 resolved")
        }, 3000)
    })
}

async function callApi() {
    let a1 = API1();
    let a2 = API2();
    let a3 = API3();


    let data = await Promise.all([a1, a2, a3])
    console.log(data)
}

callApi()
