let arr = [1, 2, 3, 4, 5, 6]; 
let arr2 = [10, 20, 30, 40, 50];
let arr3 = [1, 3, 5, 7, 9];
function sum(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sum(arr));
console.log(sum(arr2));
console.log(sum(arr3));