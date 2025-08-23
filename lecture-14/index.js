
// console.log(window)

// console.log("hello")

// console.log(this)


// let obj = {
//     name: "palak", 
//     amount: 13000,
//     getAmount: function () {
//         // console.log(bounce)
//         console.log(this)
//     }
// }
// obj.getAmount();

// let obj ={
//     name: "palak",amount:13000,
//     getAmount:()=>{
//         console.log(bounce)
//         console.log(this)
//     }
// }

// var a=5;
// let obj ={
//     name: "palak",
//     a:44,
//     amount:13000,
//     getAmount:function(){
     
//         console.log(this.a)
//     }
// }
// obj.getAmount();

// //undefined //

// let a=8;
// let obj ={
//     name: "palak",
//     a:9,
//     amount:13000,
//     getAmount:()=>{
  
//         console.log(this.a)
//     }
// }
// obj.getAmount();




let obj ={
    id:1,
    name: "palak",
}
console.log(obj)
// console.log(obj.toString())
// console.log(obj.__proto__)
Object.getPrototypeOf(obj)


//this
// console.log(window);

// console.log("mai alg hu ");

// console.log(this==window);
// let a=5;
// let obj={
//     name:"palak",
//     amount:13000,
//     getBalance:()=>{
//         console.log(this.a);
//         // // console.log("bounceeeeee");
//         // console.log(this);        
//     }
// }
// obj.getBalance()

// prototype
// let obj={
//     id:1,
//     name:"ritik"
// }
// // console.log(obj.toString());
// console.log(obj.__proto__);


Array.prototype.aanya=function(cb){
    console.log(cb);
    
    let res=[]
    for(var i=0;i<this.length;i++){
      var data=  cb(this[i],i,this)
       res.push(data)
        
    }
    return res

}

let arr=[1,2,3]
 let val=  arr.aanya(   (a,b,c)=>{ 
    return a*2      

}   )
console.log(val);




// console.log(arr);


//arr=> Array.prototype=> Object.prototype=>null
// console.log(arr.name);
// let obj={
//     id:1
// }
// obj=> Object.prototype=> null
// console.log(obj.name);
// let str="Hello"
// str=> String.prototype=> Object.prototype=> null
// console.log(str.toLowerCase());

// arr.map(()=>{

// })