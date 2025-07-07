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


let inp = document.querySelector('input')
let button = document.querySelector('button')


button.addEventListener('click', () => {
    let city = inp.value
    let key = '9f6290d6cda9a36a63755fadee71f83d'
    let apiData = `https://api.openWeathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    fetch(apiData).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        show(data,city)
    })
})

function show(data,city) {
    let div = document.querySelector('div')
    let h2 = document.createElement('h2')
    h2.innerText = `The temperature of ${city} is ${data.main.temp}°C`
    div.append(h2)
    

}


