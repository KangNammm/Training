// cú pháp khai báo 1 mảng
let arrayInt = [1,2,3,4,5,6,7,8,9];
console.log(arrayInt);
let arrayString = ["apple", "banana"];
console.log(arrayString);

// khai báo mảng sử dụng từ khóa new
// let arr = new Array(8);
// console.log(arr);

// lấy ra phần tử tại vị trí index = 7 của mảng arrayInt
console.log(" Phần tại vị trí index = 7 là "+arrayInt[7]); 
console.log(" Phần tại vị trí index = 3 là "+arrayInt[3]); 
arrayString[4] = "pineapple";
console.log(arrayString);
//  for i (iterator)
// lặp cho mảng 
// for in
for(let index in arrayInt){ // dùng để lấy ra lần lượt các chỉ số trong mảng
    console.log(arrayInt[index]);
}

// tính tổng các phần tử trong mảng
let sum = 0;
for( const i in arrayInt){
    sum += arrayInt[i];
}
console.log(sum);

// for of lặp phần tử
// tính tích của các phần tử trong mảng
let multi = 1;
for (const element of arrayInt){ // duyệt phần tử mảng
    console.log(element);
    multi *= element;   
}

// for i
for(let i=0; i< arrayInt.length; i++){
    console.log(arrayInt[i]);
}

// in ra các phần tử chia hết cho 3 trong bảng
for( let i=0; i<=arrayInt.length; i++){
    if(i%2==0 && arrayInt[i]%3==0){
        console.log(arrayInt[i]);
    }
}

let arrayAnimals = [];
// thêm mới 1 phần tử vào cuối mảng
arrayAnimals.push("unicorns");
arrayAnimals.push("bird");
arrayAnimals.push("fish");
arrayAnimals.push("spider");
arrayAnimals.push("bear");
arrayAnimals.push("snake");
arrayAnimals.push("lion");
arrayAnimals.push("dog");
arrayAnimals.push("buffalo");
arrayAnimals.push("cat");
console.log(arrayAnimals);

// cách push hoạt động
arrayAnimals[arrayAnimals.length] = "cow";
console.log(arrayAnimals);
let arrayAns = ["bat", "chicken","women"];
for (let i = 0; i < arrayAns.length; i++){
    // thêm lần lượt các phần tử vào cuối mảng
    arrayAnimals[arrayAnimals.length] = arrayAns[i];
    console.log(arrayAnimals);
}


// phương thức join() : chuyển mảng thành chuỗi
let arrayJoin = [1,2,3,4];
let string = arrayJoin.join("-");
console.log(string);
//  đảo ngược các phần tử trong mảng : reverse 
console.log(arrayJoin.reverse());
// sắp xếp mảng
arrayInt.sort(function(a,b){
    return a-b;
})

// nối mảng 
console.log(arrayJoin.concat(arrayInt,[11,12,13]));
//  lấy và xóa phần tử cuối pop();
let elementDelete = arrayInt.pop();
console.log(arrayInt);
//  bài tập
let arrdemo = [1,2,3,4,5,6,7,8,9];
arrdemo.pop();
arrdemo.pop();
arrdemo.pop();
arrdemo.pop();
arrdemo.push(6,7,8);
arrdemo.pop();
arrdemo.pop();
let deleteItem = arrdemo.pop();
console.log(arrdemo);
console.log(deleteItem);


// ngược lại của pop, push là shift, unshift

arrdemo.unshift(7,8,9);


// chuyển mảng thành chuỗi toString giống Join nhưng ko có tham số chuyền vào
console.log(arrdemo.toString());
// mảng nhiều chiều
let arr2side = [[1,2,3],[4,5,6],[7,8,9]];
// cách gọi giá trị bên trong mảng đa chiều
console.log(arr2side[1][1]);
// vd
let arr2 = [[5,8,9,2,10,3],[4,2,6,8,1,0],[5,9,11,2,4,6]];
console.log(arr2);
console.log("============================");

//  duyệt mảng 2 chiều 
for(let i=0; i<arr2.length; i++){
    for( let j=0; j<arr2[i].length; j++){
        console.log(arr2[i][j]);
    }
}

// tạo 1 mảng 2 chiều m x n với các phần tử có giá trị ngẫu nhiên
// Math.round(Math.random()*98+1)


let m=10, n=15;
let arrRandom = new Array(m)
console.log(arrRandom);
for(let i=0; i<m; i++){
    arrRandom[i] = new Array(n);
    for(let j=0; j<n; j++){
        arrRandom[i][j] = Math.round(Math.random()*98+1);
    }
}
console.log(arrRandom);
