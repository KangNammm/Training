// 1. Khai báo mảng một chiều có tên arrayInt
// a. Nhập 5 giá trị số nguyên cho mảng từ bàn phím
// b. Hiển thị giá trị các phần tử của mảng
// c. In các phần tử có giá trị chẵn và tính tổng
// d. In các phần tử có chỉ số lẻ và tính tổng
// e. In giá trị các phần tử trong mảng là số nguyên tố
// f. In các phần tử có giá trị là max hoặc min
// g. Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp
// xếp (không và có sử dụng hàm sort)
// h. Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá
// trị như vậy

// a
// let mang = prompt("Nhap mang ngan cach voi nhau bang dau ','")
// let arrInt = mang.split(",")
// for (const i in arrInt) {
//     arrInt[i] = Number(arrInt[i])
// }

// // b
// console.log(arrInt);

// // c
// let sumChan = 0;
// for (const value of arrInt) {
//     if (value % 2 == 0) {
//         sumChan += value
//     }
// }
// console.log("Tong cac so chan la: ", sumChan);

// // d
// let sumLe = 0;
// for (const i in arrInt) {
//     if (i % 2 != 0) {
//         sumLe += arrInt[i]
//     }
// }
// console.log("Tong cac phan tu le la: ", sumLe);

// // e.In giá trị các phần tử trong mảng là số nguyên tố
// function isNguyenTo(so) {
//     for (i = 2; i <= Math.sqrt(so); i++) {
//         if (so % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (const value of arrInt) {
//     if (isNguyenTo(value)) {
//         console.log(value, " la so nguyen to");
//     }
// }

// // f
// let max = min = arrInt[0];
// for (const i in arrInt) {
//     if (arrInt[i] >= max) {
//         max = arrInt[i]
//     } else {
//         min = arrInt[i]
//     }
// }
// console.log(`Max: ${max}; Min: ${min}`);

// // g
// // ko su dung sort
// // for (let i = 0; i < arrInt.length - 1; i++) {
// //     for (let j = i + 1; j < arrInt.length; j++) {
// //         if (arrInt[i] < arrInt[j]) {
// //             let temp = arrInt[i]
// //             arrInt[i] = arrInt[j]
// //             arrInt[j] = temp
// //         }
// //     }
// // }
// // console.log("Mang sau khi sap xep: ", arrInt);
// // co su dung sort
// console.log(arrInt.sort((a, b) => b - a));

// // h
// let n = Number(prompt("Nhap vao so nguyen"))
// let count = 0
// for (const value of arrInt) {
//     if (value == n) {
//         count++;
//     }
// }
// console.log(`${n} xuat hien ${count} lan`);



//



// 2. Khai báo mảng 2 chiều số nguyên arrInt
// a. Nhập giá trị các phần tử của mảng từ bàn phím
// let arrInt = [];
// let x = +prompt("Nhap so phan tu cua mang");
// let y = +prompt("Nhap so phan tu cua cac mang con");
// for (let i = 0; i < x; i++) {
//     arrInt[i] = [];
//     for (let j = 0; j < y; j++) {
//         arrInt[i][j] = +prompt(`Nhap phan tu thu ${j + 1}/${y} cua mang con ${i + 1}/${x}`);
//     }
// }
// console.log(arrInt);
// // b. In giá trị các phần tử của mảng
// for (let i in arrInt) {
//     console.log("row " + i);
//     for (let j in arrInt) {
//         console.log(arrInt[i][j]);
//     }
// }
// // c. In giá trị các phần tử nằm trên đường biên (Coi mảng 2 chiều là ma
// // trận)
// for (let i = 0; i < x; i++) {
//     console.log(arrInt[0][i]);
//     console.log(arrInt[x - 1][i]);
// }
// for (let j = 0; j < y; j++) {
//     console.log(arrInt[j][0]);
//     console.log(arrInt[j][y - 1]);
// }
// d. In giá trị các phần tử nằm trên đường chéo chính và phụ
// function maTran(num) {
//     const n = num.length
//     console.log(`duong cheo chinh`);
//     for (let i = 0; i < n; i++) {
//         console.log(num[i][i]);
//     }
//     console.log(`duong cheo phu`);
//     for (let i = 0; i < n; i++) {
//         console.log(num[i][n - i - 1]);
//     }
// }
// const num = [
//     [4, 2, 3, 1],
//     [5, 8, 7, 6],
//     [11, 10, 9, 12],
//     [15, 14, 13, 16]
// ]
// maTran(num)


// // e. Sắp xếp mảng tăng dần theo dòng (không và có sử dụng hàm sort)
// function tangDan(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].sort((a, b) => a - b)
//     }
//     return arr
// }

// console.log(tangDan(num));



//




// 3. Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
// let array = ["Jazz", "Blues"];
// // a. Thêm phần tử “Rock-n-Roll” vào cuối mảng
// array.push("Rock-n-Roll");
// // b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng
// // có tổng số phần tử là lẻ
// if (array.length % 2 !== 0) {
//     array[Math.floor(array.length / 2)] = "Classics";
// }
// // c. Xóa phần tử đầu tiên của mảng và hiển thị mảng
// array.shift();
// // d. Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
// array.unshift("Rap");
// array.unshift("Reggae");
// console.log(array);




//


// 5. Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b
// Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và b

// let arrIteger = [];
// let a = +prompt("Nhap vao so a:");
// let b = +prompt("Nhap vao so b:");
// for (i = a; i <= b; i++) {
//     arrIteger.push(i);
// }
// console.log(`So nguyen  dau tien la ${a}`);
// console.log(`So nguyen  cuoi cung la ${b}`);
// console.log(arrIteger);




//





// 4. Khai báo mảng một chiều 
// a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt
// và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”
// let arrInt = [];
// while (true) {
//     let n = Number(prompt("Nhap mot so"));
//     if (n || n == 0) {
//         arrInt.push(n);
//     } else {
//         break
//     }
// }
// // b. Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min (không và có sử dụng hàm Math.max và Math.min)
// let sum = 0;
// let max = min = arrInt[0];
// for (const value of arrInt) {
//     if (value > max) {
//         max = value
//     }
//     if (value < min) {
//         min = value
//     }
//     sum += value
// }
// console.log(`Mang da nhap: ${arrInt}`);
// console.log(`Min: ${min}; Max: ${max}; Sum: ${sum}`);



//


// 1

// function inXinChao() {
//     console.log("Xin chao RA");
// }
// inXinChao()


//


// 2
// function tinhBinhPhuong(number) {
//     return Math.pow(number, 2)
// }
// console.log(tinhBinhPhuong(3));
// console.log(tinhBinhPhuong(6));
// console.log(tinhBinhPhuong(0));



//


// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ
// thứ nhất tính từ năm 1 đến 100

// let nam = Number(prompt("Nhap nam"))

// if (nam % 100 === 0) {
//     console.log(`Nam ${nam} thuoc the ky ${nam / 100}`);
// } else {
//     console.log(`Nam ${nam} thuoc the ky ${Math.ceil(nam / 100)}`);
// }



//



// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// tiên và thêm vào dấu “…” ở cuối chuỗi

// let chuoi = prompt("Nhap chuoi")

// function inChuoi(chuoi) {
//     if (chuoi.length < 15) {
//         console.log(chuoi);
//     } else {
//         // hàm slice áp dụng cho chuỗi, slice có chức năng cắt chuỗi từ vị trí nào và muốn cắt bao nhiêu
//         // VD: let chuoi = "mot chuoi rat la dai"
//         // VD: chuoi.slice(0, 15): cắt từ vị trí 0 và cắt 15 phần tử ==> "mot chuoi rat l"
//         // VD: chuoi.slice(5, 2): cắt từ vị trí 5 và cắt 2 phần tử ==> "uo"
//         chuoi = chuoi.slice(0, 15)
//         console.log(chuoi + "...");
//     }
// }
// inChuoi(chuoi)



//






//


// //6. Viết function trả ra giá trị lớn nhất trong một mảng số
// let arrInt = [36,22,58,44,79];
// // arrInt.sort(function(b,a){
// //     return a-b
// // })
// // console.log("max =",arrInt[0]);

// let max = arrInt.reduce(function(value,index){
//     return value>index? value:index;
// })
// console.log(max);

//



// // 7. Viết function kiểm tra số chẵn - lẻ, nguyên tố, hoàn hảo
// function checkNumber(number) {
//     if (number % 2 == 0) {
//         if (isPrimeNumber(number)) {
//             console.log(number + ": so chan va so nguyen to");
//         } else if (isPerfectNumber(number)) {
//             (isPerfectNumber(6));
//             console.log(number + ": so chan va so hoan hao");
//         } else {
//             console.log(number + ": so chan");
//         }
//     } else {
//         if (isPrimeNumber(number)) {
//             console.log(number + ": so le va so nguyen to");
//         } else if (isPerfectNumber(number)) {
//             (isPerfectNumber(6));
//             console.log(number + ": so le va so hoan hao");
//         } else {
//             console.log(number + ": so le");
//         }
//     }
// }
// function isPrimeNumber(number) {
//     let check = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     if (check) {
//         // console.log(number + ": so nguyen to");
//         return true;
//     } else {
//         // console.log(number + ": khong phai so nguyen to");
//         return false;
//     }
// }

// function isPerfectNumber(number) {
//     let sum = 0;
//     for (let j = 0; j <= number / 2; j++) {
//         if (number % j == 0) {
//             sum += j;
//         }
//     }
//     if (sum == number) {
//         // console.log(number + ": so hoan hao");
//         return true
//     } else {
//         // console.log(number + ": khong phai so hoan hao");
//         return false
//     }
// }

// checkNumber(6)
// checkNumber(11)
// checkNumber(15)
// checkNumber(17)


// for (const value of arr) {
//     if (isNguyenTo(value)) {
//         console.log(value, " la so nguyen to");
//     }
// }



//




// // 8. Viết function trả ra trung bình cộng của một mảng số
// function averageOfAArray(array) {
//     let sum = 0;
//     for (const value of array) {
//         sum += value;
//     } return sum / array.length;
// }
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(averageOfAArray(array1));




//




// 9. Nhập vào một vào một số n, in ra n số nguyên tố tăng dần
// let n = 10; //+prompt("Nhap vao 1 so n bat ky");
// function printPrimeNumber(n) {
//     let count = 0;
//     let number = 2
//     while (true) {
//         if (count == n) {
//             break;
//         }
//         let check = true;
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 check = false;
//                 break;
//             }
//         }

//         if (check) {    
//             console.log(number);
//             count++;
//         }
//         number++;
//     }
// }
// printPrimeNumber(10)


