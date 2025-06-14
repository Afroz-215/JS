//  D O M -> DOCUMENT OBJECT MODEL

// let val =document.getElementById("one")
// val.style.color="grey"
// val.innerText="hii"


// console.log(val.innerText)



// let val1 =document.getElementsByClassName("two")
// // val1[0].style.backgroundColor ="red"
// for(let i of val1){
//      i.style.color ="blue"
// }

// console.log(val1[0].innerHTML)


// let val1 =document.querySelector("#one")
//  val1.style.backgroundColor ="red"


// console.log(val1.innerHTML)


// let val1 =document.getElementsByTagName("h1")
//  val1[0].style.backgroundColor ="red"


// console.log(val1[0].innerHTML)

// let tag = document.querySelector('a')
// console.log(tag.getAttribute('href'))
// tag.setAttribute("href","http://flipkart.com")

const h1 = document.createElement('h1')
const div = document.querySelector('div')
h1.innerText = 'hello'
div.append(h1)
console.log(div)