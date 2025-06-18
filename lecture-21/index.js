// let a = [
//     "https://plus.unsplash.com/premium_photo-1680608155016-3faa9cbdc236?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx2cFhoTGdHbm9qMHx8ZW58MHx8fHx8",
//     "https://plus.unsplash.com/premium_photo-1747854406811-b67b6dac07e9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0TGlHd3JlWWNuNHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1746730406177-f8562813b938?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
//     "https://plus.unsplash.com/premium_photo-1680608155016-c4006411f30a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1750042689626-7a1639fcced7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
//     "https://images.unsplash.com/photo-1750087023850-36213c737960?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"

// ]

// let imageEle = document.querySelector("img")

// let num = 0;

// setInterval(function () {
//     imageEle.setAttribute("src", a[num])
//     num = (num + 1) % a.length
// }, 5000)

function fun1() {
    console.log("Hello, World!")
}

// let count =document.querySelector("#one")

// count.onclick= function(){
//     console.log("ok")
// }

let btn = document.querySelector("#one")

btn.addEventListener("click", function () {
    console.log("done")
})


let body = document.querySelector("body")

// body.addEventListener("click",function(){
//     body.style.backgroundColor ="pink"
// })


  let isBool = true;
body.addEventListener("click", function () {
  
    if (isBool) body.style.backgroundColor = "pink"
    else body.style.backgroundColor = "blue"

    isBool = !isBool
})