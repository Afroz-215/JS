// fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
//     // console.log(res)
//     return res.json()
// }).then((data) => {
//     // console.log(data)
//     data.map((res) => {
//         // console.log(res.id)
//         // console.log(res.title)
//         showData(res)

//     })
// })

// let div = document.querySelector('div')

// function showData(res) {
//     let li = document.createElement('li')
//     let h3 = document.createElement('h3')

//     li.innerText = res.title
//     h3.innerText = res.id

//     div.append(h3, li)
// }


let city ='bina'
let key ='9f6290d6cda9a36a63755fadee71f83d'
let apiData =`https://api.openWeathermap.org/data/2.5/weather?q=${city}&appid=${key}`

let a=fetch(apiData).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
})

