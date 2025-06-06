function outer(){
    let count = 0;
    return {
        getCount:function(){
            return count++;
        }
    }
}

let data1 = outer();
let data2 = outer();

console.log(data1.getCount())
console.log(data2.getCount())
console.log(data1.getCount())
console.log(data2.getCount())
