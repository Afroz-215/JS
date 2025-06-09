// call, apply , bind

//Call --

// let obj ={
//     id:1,
//     name:"rahul",
//     lastname :"Kumar",
//     getFullName: function(){
//         console.log(this.name+" "+this.lastname)
//     }
// }
// obj.getFullName();


// let obj1 ={
//     id:1,
//     name:"sakshi",
//     lastname :"Kumari",
//     // getFullName: function(){
//     //     console.log(this.name+" "+this.lastname)
//     // }
// }
// obj.getFullName.call(obj1);



// With parameter

// let obj ={
//     id:1,
//     name:"rahul",
//     lastname :"Kumar",
//     getFullName: function(age){
//         console.log(this.name+" "+this.lastname+" "+age)
//     }
// }
// obj.getFullName();


// let obj1 ={
//     id:1,
//     name:"sakshi",
//     lastname :"Kumari",
//     // getFullName: function(){
//     //     console.log(this.name+" "+this.lastname)
//     // }
// }
// obj.getFullName.call(obj1,22);

// Apply --

// let obj ={
//     id:1,
//     name:"rahul",
//     lastname :"Kumar",
//     getFullName: function(age,isPass){
//         console.log(this.name+" "+this.lastname+" "+age+" "+isPass)
//     }
// }
// // obj.getFullName();


// let obj1 ={
//     id:1,
//     name:"sakshi",
//     lastname :"Kumari",
//     // getFullName: function(){
//     //     console.log(this.name+" "+this.lastname)
//     // }
// }
// obj.getFullName.apply(obj1,[22,true]);

// // bind --

//  let data = obj.getFullName.bind(obj1,[])
//  data();


function user(userName, lastName){
    this.userName =userName,
    this.lastName = lastName

}
 let data = new user("sakshi","Kumari");
 console.log(data)