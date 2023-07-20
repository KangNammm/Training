// let x = 1;
// let y = 1;
// let z = '1';
// // toán tử so sánh "=="
// let rs = (x==y) // true
// let rs2 = (x==z) // true

// console.log(rs,rs2);
// //  toán tử so sánh "===" so sánh cả giá trị lẫn so sánh kiểu dữ liệu
// let rs3 = (x===y) // true
// let rs4 = (x===z) // false

// console.log(rs3,rs4);
// //  so sánh khác nhau "!=" hoặc "!=="
// console.log(x!=y); // false
// console.log(x!=z); // false
// console.log(x!==y); // false
// console.log(x!==z); // true

// console.log(2>=2);
// let number = 5;
// // 1 số chia hết cho 3
// let condition1 = number%3 == 0;
// // 1 số chia hết cho 5
// let condition2 = number%5 == 0;
// //vừa chia hết cho 3 vừa chia hết cho 5 
// let condition3 = condition1 && condition2;
// //  hoặc chia hết cho 3, hoặc chia hết cho 5
// let condition4 = condition1|| condition2;
// console.log("condition1" + condition1);
// console.log("condition2" + condition2);
// console.log("condition3" + condition3);
// console.log("condition4" + condition4);
// console.log(!condition1);
// console.log(!condition3);
// console.log(typeof(number));

// // nếu x%2 == 0 thì x chia hết cho 2,
// // nếu ko thì x ko chia hết cho 2
// // cú pháp
// if(x%2 == 0){
//     //  nếu điều kiện đúng
//     console.log(x + " chia het cho 2");
//     console.log(`${x} chia het cho 2`);
// }else{
//     //  nếu điệu kiện sai
//     console.log(`${x} khong chia het cho 2`);
// }
// //  câu lệnh lồng
// if(x%3==0){
//     // chia hết cho 3
//     if(x%5==0){
//         // vừa chia hết 3 vừa chia hết cho 5
//     }else{
//         // chia hết cho 3 nhưng ko chia hết cho 5
//     }
// }else{
//     // vừa ko chia hết cho 3 vừa ko chia hết cho 5
// }
// // đánh giá xếp loại của học sinh dựa vào điểm trung bình
// if(dtb >=8.0 && dtb <=10){
//     // học sinh giỏi
// }else if(dtb >=7.0){
//     // khá
// }else if(dtb >=6.5){
//     // trung bình
// }

// let weight = +prompt(" Nhap can nang(kg)");
// let height = +prompt(" Nhap chieu cao(cm)");
// let bmi =weight/(height*height) ;
// if (bmi<18.5){
//     document.write(" Ban nhe");
// }else if(bmi<25){
//     document.write(" Thua can");
// }else if(bmi<29.9){
//     document.write(" Tien beo phi");
// }else if(bmi<34.9){
//     document.write(" Beo phi cap 1");
// }else if(bmi<39.9){
//     document.write(" Beo phi cap 2");
// }else if(bmi<40){
//     document.write(" Beo phi cap 3");
// }else
//     document.write(" Beo phi cap 3");


