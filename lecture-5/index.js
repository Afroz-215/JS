// // let arr =[1,2,3,4,5,6,7,3]
// // console.log(arr.includes(3))
// // console.log(arr.indexOf(100))



// // const people = [
// //   { name: "John", age: 25 },
// //   { name: "Alice", age: 30 },
// //   { name: "Bob", age: 20 }
// // ];

// // people.sort((a, b) => a.age - b.age); // Sort by age (ascending)
// // console.log(people);
// // Output: [{ name: "Bob", age: 20 }, { name: "John", age: 25 }, { name: "Alice", age: 30 }]

// let arr1 =[1,2,3,4,4,5,6,7,3]
// let arr2 =[1,43,12,4,2,5]

// let a = arr1.concat(arr2)
// console.log(a)

// // let merge = [...arr1, ...arr2];
// // console.log(merge);

// let merge = []
// for(let i of arr1){
// merge.push(i)
// }
// for(let i of arr2){
// merge.push(i)
// }
// console.log(merge)

// console.log(Math.floor(Math.random()*10))

// let luckyNo = Math.floor(Math.random() * 10)
// console.log(luckyNo)
// let val = Number(prompt("enter a no."))

// if (luckyNo == val) console.log("you are winner ")
// else console.log("try again")

let arr = [-3, 0, 3, 5, 5, 2, 0, 1];
let k = 3;

function maxSubarray(arr, k) {
    let result = [];
    let i = 0;
    let j = k - 1;

    while (j < arr.length) {
        let max = arr[i];
        for (let m = i + 1; m <= j; m++) {  
            if (arr[m] > max) {
                max = arr[m];
            }
        }

        result.push(max);
        i++;
        j++;
    }

    return result;
}

console.log(maxSubarray(arr, k));


function maxSumSubarray(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;

    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        windowSum += arr[j];

        if (j - i + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[i];
            i++;
        }
    }

    return maxSum;
}


console.log(maxSumSubarray(arr, k)); 

// some() → returns true if AT LEAST ONE element matches
let  arr1 =[1,2,3,5,6,7,8]
let data = arr1.some((a)=> {
    return a == 5
})
console.log(data)

// every() → returns true ONLY IF ALL elements match
let data2 = arr1.every((a)=> {
    return a == 5
})
console.log(data2)

// find() → returns the FIRST element that matches the condition
let data3 = arr1.find((a,b,c)=>{
    return a == 5
})

// filter() → returns ALL elements that match the condition
console.log(data3)

let data4 =arr1.filter((a,b,c)=>{
    return a == 5
})
console.log(data4)

