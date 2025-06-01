// function outer() {
//     let userName = "lionel";
//     function printName() {
//         console.log(userName);
//     }
//     printName()
// }
// outer()


// function outer() {
//     let userName = "lionel";
//     function printName() {
//         console.log(userName);
//     }
//     return printName
// }
// let fn = outer()
// fn()

function outer(){
    let count =0
    return{
        getCount:function(){
               return count
        }
     
    }
}
let fn1 =outer()
console.log(fn1.getCount())