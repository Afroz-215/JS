// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.length)

// 2d array

 let arr1 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]]

let data =arr1.map((a,b,c)=>a.map((res =>{
    return res*2
})))
console.log(data.flat())

// flat function convert 2d array to 1d array

let d=arr1.flat();
let data1 =d.reduce((a,b,c)=>{
    return a+b
})
console.log(data1)

let totalSum =arr1.reduce((sum,b)=>{
    return sum + b.reduce((val,res)=>{
        return val+res
    },0)
},0)
console.log(totalSum)

// console.log(arr1.length)
// console.log(arr1[0][0])
let sum = 0;
let max = -Infinity;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        // console.log(arr1[i][j])
        // sum += arr1[i][j]
      max =Math.max(arr1[i][j],max)
    }
}
// console.log(sum)
console.log(max)
