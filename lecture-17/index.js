// asynchronous Programming

// WEB API

// setTimeout(()=>{
//     console.log("hello")
// },0)


// setTimeout(()=>{
//     console.log("bye")
// },1000)

// console.log("hii")

//SetTimeOut and SetInterval

// setTimeout(()=>{
//     console.log("hello")
// },1000)


// setInterval(()=>{
//     console.log("hello")
// },1000)

// for(let i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
// }

// with var keyword

// function print(i){
//     setTimeout(()=>{
//         console.log(i)
//     },1000*i)
// }

// for(var i=1;i<=5;i++){
//     print(i)
// }

// let arr =[1,2,3,4,5]
// for(var i=1;i<=arr.length;i++){
//     setTimeout(()=>{
//         console.log(arr[i]);
//     },i*1000)
// }

// var a =3
// function foo(){
//     console.log(a)
//     console.log(bar())
//     var a =5
//     function bar(){
//         return 4;
//     }
// }
// foo()

// let time =new Date().toLocaleTimeString()
// console.log(time)


//Clock

setInterval(() => {
  let time = new Date().toLocaleTimeString();
  console.log(time);
}, 1000);
