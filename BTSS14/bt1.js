// let arr = [];
// for(i=0; i<10; i++){
//     let value = +prompt(" Nhap vao so bat ki");
//     arr.push(value);
// }
// let count = 0;
// for(i=0;i>arr.length;i++){
//     if(arr[i]>10){
//         count =arr[i];
//         count++
//     }else{
//         break;
//     }
// }
// console.log(count);

// let arr = [];
// let max = 0;
// let index = 0;
// for (let i = 0; i < 10; i++) {
//     let value = parseInt(prompt(`nhap so nguyen thu ${i + 1}:`));
//     arr.push(value);
// }
// // b2: duyet tung phan tu trong mang neu phan tu do lon hon phan tu vua chay qua thi no duoc gan bang gia tri max con neu khong thi phan tu vua chay qua lon hon thi la max.

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         index = i;
//     }
// }
// console.log(`phan tu co gia tri lon nhat trong mang la ${max}`);
// console.log(`phan tu do o vi tri la ${index}`);


// let arrayJoin = [];
// for( let i=0;i<=4; i++){
//     let number = +prompt(" Nhap vao so ban muon");
//     arrayJoin.push(number);
// }
// console.log(arrayJoin.reverse());

// let number = +prompt(" Nhap so");
// let arr = [];
// for( let i =0; i<number; i++){
//     let element = +prompt( " Nhap so muon kiem tra");
//     arr.push(element);
// }

// let count = 0;
// for(let j=0; j<arr.length; j++){
//     if(arr[j]<0){
//         count++
//     }
// }
// console.log(count);

// let arr = +prompt(" Nhap vao 10 so nguyen");
// arr= arr.split(",");
// fo

// let a = 10;
// let arr = [];
// let arrD = [];
// for (i = 0; i < a; i++) {
//     let n = +prompt(`Nhap phan tu thu ${i + 1} cua mang 10 phan tu`);
//     arr.push(n);
// }
// let num = +prompt(" Nhap 1 so nguyen de kiem tra");
// let check = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         check = true;
//     } else {
//         arrD.push(arr[i]);
//     }
// }
// if (check) {
//     arr = arrD;
// } else {
//     alert(`Gia tri ${num} khong ton tai trong mang`);
// }


// let arr = [];
// for (i = 0; i < 5; i++) {
//     let chuoi = +prompt(` Hay nhap so nguyen theo thu tu ${i + 1}`)
//     arr.push(chuoi)
// }
// for (i = 0; i < arr.length - 1; i++) {
//     for (j = i + 1; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let a = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = a;
//         }
//     }
// }
// console.log(arr);

let a = [];
let b = [];
for(let i=0; i<10;i++){
    let number = +prompt(` Nhap so thu ${i+1} cua mang a`);
    a.push(number);
}
for(let i=0; i<10; i++){
    let number = +prompt(` Nhap so thu ${i+1} cua mang b`);
    b.push(number);
}
let c = a.concat(b);
console.log(c);


