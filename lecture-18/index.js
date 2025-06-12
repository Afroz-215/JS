// function step1(fn){
//     setTimeout(()=>{
//         console.log("select a photo")
//         fn()
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log("apply filter")
//         fn()
//     },4000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log("caption")
//         fn()
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log("post !!!")
//     },2000)
// }

// // step1()
// // step2()
// // step3()
// // step4()

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })


// let pro = new Promise((res,rej)=>{
//     // res()
//     rej()
// })
// console.log(pro)


let pro = new Promise((res,rej)=>{
    // res("hello")
    // rej()
    let isBool =true
    if(isBool){
        res("hello")
    }else{
        rej()
    }
})
pro.then((r)=>{
    console.log(r)
}).catch((err)=>{
    console.log(err)
})


