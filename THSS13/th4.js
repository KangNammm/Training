let array = [];
for( let i=0; i<5; i++){
    array.push(i);
}
console.log(" Su dung phuong thuc push()", array);
let a = 10;
array.unshift(a);
console.log(" Su dung phuong thuc unshift()", array);
array.pop();
console.log(" Su dung phuong thuc pop()", array);
array.shift();
console.log(" Su dung phuong thuc shift()", array);
array.splice(1,2);
console.log(" Su dung phuong thuc splice()", array);