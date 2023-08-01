// cách khai báo hàm
// cách 1 sd function : declaration function
function name(params){

}
// cách 2 sử dụng biến đươjc gán bởi 1 function : expression function
const sum = function(params){

}
// cách 3 sử dụng hàm mũi tên : arrow function
// tính tổng 2 số a,b
const add = (a,b)=>{
    return a+b
};

// các phương thức làm việc của mảng
// forEach();
// dùng để duyệt mảng
let arrInt = [1,2,3,4,5,6];
arrInt.forEach((currentValue, index, array)=>{
    console.log(" Vòng lặp thứ"+ index);
    console.log(" Giá trị phần tử hiện tại "+ currentValue); // không cần dùng array[i]
    console.log(" Mảng chỉ đọc "+ array);
})



// reduce() : dùng để ghi nhớ giá trị sau mỗi lần lặp
// tính tổng các số trong mảng trên
 let total = arrInt.reduce((sum,value, index, array)=>{ // nhận vào 4 giá trị, 
    // thường chỉ dùng 2 cái đầu
    // if(value%2==0){
    //     // bắt buộc phải có return cho biến sum
    // return sum + value;
    // }
    // return sum;

    // cách 2 dùng toán tử 3 ngôi
    return value%2==0?sum+value:sum;
},0)
console.log(total);



// map() : dùng để tạo ra 1 mảng mới bằng mảng đã cho,
// có độ dài bằng mảng đã cho nhưng theo điều kiện nhất định
// vd tính bình phương từng phần tử trong mảng
let arrayPow = arrInt.map((value)=>{
    return value*value    
})

console.log(arrayPow);





// filter(): bộ lọc các phần tử theo điều kiện xác định
// vd lọc các phần tử > 3
let arrayFilter = arrInt.filter((value, index)=>{
    return value > 3;
})
console.log(arrayFilter);




//


let arrString = ["táo","nho","vải","sầu riêng","mít","ổi"];
let filter = arrString.filter((value)=>{
    return value.includes("i");
})
console.log(filter);