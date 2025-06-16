var a = "10";
var b = 20;
console.log(a + b)

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

var mark = 78;
var result = (mark >= 80) ? "0" : (mark >= 60) ? "a+" : (mark >= 35) ? "p" : "f"
console.log(result);

if (mark >= 80 && mark <= 100) {
    console.log("o");
}


console.log(typeof a);
console.log(typeof b);
a = true
console.log(typeof a);
var c;
console.log(typeof c);
var c = null;
console.log(c);
// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20)
// var sum=()=>{
//     var a=10;
//     var b=20;
//     console.log(a+b);

// }
// sum() 
// let arr=[10,20,30,40];
// let arr2=[...arr,50,60,70];
// console.log(arr);
// console.log(arr2);

var marks = [95, 96, 98, 100, 99];
var [m1, m2, m3, m4, m5] = marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);





