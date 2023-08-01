// giải quyết bài toán tính tổng 2 số sử dụng hàm
// nhiệm vụ: tính tổng 2 số
// tên hàm: total
// xác định đầu vào: 2 tham số a, b
// xác định đầu ra: trả về tổng của 2 số truyền vào


// function total(a,b){
//     // khối lệnh thực thi của hàm
//     let sum = a+b;
//     console.log(` Tổng của 2 số ${a} và ${b} là ${sum}`);
// }

// // gọi hàm
// total(6,9);


// total(15,5);

function sumNumber(a,b){
    sum = 0;
    for(var i = a; i<=b; i++){
        sum +=i;
    }
    console.log(" Sum from 35 to 49 is "+ sum);
}
sumNumber(1,10);
sumNumber(20,37);
sumNumber(35,39);

// cách khai báo hàm tổng quát
function tenHam(a,b,c){
    // phần thân hàm

    // trả về giá trị
console.log(a);
return 1;
console.log(b);
console.log(c);
}

tenHam(1,2,3); 

// phạm vi của biến 
// var
// let và const


// pass by value
// hàm increment để tăng giá trị của tham số n lên 1 đơn vị
function increment(n){
    n++;
    // console.log(" x inside the method is " + x);
}
function main(){
    var x= 1;
    console.log(" Before the call, x is " + x);
    increment(x);
    console.log(" After the call, x is " + x);
}
main();
// ví dụ khác pass by value
let m=1;  // khai báo biến m = 1
// địnj nghĩa 1 hàm nhận vào 1 tham số có tên là a và tăng a thêm 2 đơn vị
function changeM(a){ // a=m; truyền tham trị hay còn gọi là truyền giá trị
    a=a+2;
}
// gọi hàm và truyền vào giá trị của biến m
changeM(m);
console.log(m);
   
function changeArr0(arr){
    // truyền tham chiếu hay còn gọi là truyền địa chỉ
    arr[0]++;
}
let arr1 = [1,2,3,4];
// gọi hàm
// changeArr0(arr1);
console.log(arr1);



// function circleSandC(radius){
//     let area = Math.PI*Math.pow(radius,2);
//     let perimeter = Math.PI*radius;
//     return [area, perimeter];
// }
// console.log(circleSandC(5));
// console.log(circleSandC(11));
// console.log(circleSandC(20));
// console.log(circleSandC(50));



function kt(enter){
        return isNaN(enter);
}
console.log(kt(2));
console.log(kt("adc"));
console.log(kt(NaN));
console.log("========================");

function number(check){
        return check>0;
}
console.log(number(34));
console.log(number(23));
console.log(number(-12));
console.log(number(-54));