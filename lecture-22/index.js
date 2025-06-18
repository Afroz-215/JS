// let inp =document.querySelector("input")
// inp.addEventListener("input",(e)=>{
//     console.log(e)
// })



let inp = document.querySelector("input")
let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')
let h5 = document.querySelector('h5')



inp.addEventListener("input", (e) => {
  h1.innerText = e.target.value
})


let formEle = document.querySelector('form')
formEle.addEventListener('submit', (e) => {
  e.preventDefault()


  console.log(formEle[0].value + " " + formEle[1].value + " " + formEle[2].value)

  let data = {
    name: formEle[0].value,
    number: formEle[1].value,
    password: formEle[2].value
  }

  localStorage.setItem('key', JSON.stringify(data))

  let val = localStorage.getItem('key')
  let realData = JSON.parse(val)
  h3.innerText = realData.name
  h4.innerText = realData.number
  h5.innerText = realData.password

})








// localStorage.setItem('id',543)
// console.log(localStorage.getItem('id'))
