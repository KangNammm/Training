// function number(a){
//     return Math.pow(a,2);   
// }
// console.log(number(+prompt(" Nhập vào 1 số bất kì")));

//


// function circleSandC (radius){
//     let area = (3,14*Math.pow(radius,2));
//     let perimeter = (3.14*radius)
//     return(area,perimeter);
// }
// console.log(circleSandC(5));
// console.log(circleSandC(10));
// console.log(circleSandC(20));


//



// function giaithua (a,b){
//     return(a*b);
// }
// console.log(giaithua(4,5));


//


// function check (enter){
//     return !isNaN(enter);
// }
// console.log(check(65));
// console.log(check("adc"));
// console.log(check("//"));


//


// function min(a, b, c) {
//     if (a < b) {
//         if (b < c) {
//             return a;
//         }
//     } else if (b < a) {
//         if (a < c) {
//             return b;
//         }
//     } else if (c < b) {
//         if (b < a) {
//             return c;
//         }
//     }
// }
// console.log(min(3, 4, 5));


//


// function number(check){
//     return check>0;
// }
// console.log(number(34));
// console.log(number(23));
// console.log(number(-12));
// console.log(number(0));



//


// function swap(a,b){
//    let position =a;
//    a=b;
//    b= position
//    return [a,b];
// }
// console.log(swap(4,5));


//


// function reverseArray(arr) {
//    let reversed = [];
//    for (let i = arr.length - 1; i >= 0; i--) {
//        reversed.push(arr[i]);
//    }
//    return reversed;
// }
// arr = [1, 2, 3, 4, 5]
// console.log(reverseArray(arr));


//



function countChar(array,char) {
   let count = 0;
   for (let element of array) {
       if (element === char) {
           count++;
       }
   }
   if (count === 0) {
       return -1;
   }
   else {
       return count;
   }
}
let array = [1,2,2,3,4,5]
let char = (2);
console.log(countChar(array,char));