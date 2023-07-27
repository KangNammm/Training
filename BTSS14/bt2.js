// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
//  ];
//  for(let i in a){
//     console.log("row"+i);
//     for(let j in a[i]){
//         console.log(""+a[i][j]);
//     }
//  }

// cach 1

// let n = ["c","s","c","2","6","1"]; 
// console.log(n.reverse().join(""));

// cach 2

// let n = ["c","s","c","2","6","1"];
// let kq = ""
// for(let i=n.length - 1; i>0; i--){
//     kq += n[i];
// }
// console.log(kq);


// let kytu = ["n","0","g","6","3"];
// for (let i=0; i<kytu.length; i++){
//     if(kytu[i]<0 || kytu[i] >=0){
//         console.log(kytu[i]);
//     }
// }

// let a = prompt(" Nhap 1 chuoi");
// let arr = a.split(" ");
// console.log(arr.length);

// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
// let chuoi = prompt(`nhap mot chuoi`); // VD:chuoi = "    nguyen   van        w"

// let count = 0
// chuoi = chuoi.split(" ") // chuoi = ["", "", "", "", "nguyen", "", "", "", "van", "", "w"]
// console.log(chuoi);
// // vòng lặp đếm số từ đón nhận được sau khi split(" ")
// for (let i = 0; i < chuoi.length; i++) {
//     // nếu không phải chuỗi trống thì tăng count lên
//     if (chuoi[i] != "") {
//         count++
//     }
// }
// console.log(count);

//5. Viết một chương trình nhập vào 2 chuỗi, 
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

// let chuoi1 = prompt("Nhập vào chuỗi 1");
// let chuoi2 = prompt("Nhập vào chuỗi 2");
// console.log(chuoi1);
// console.log(chuoi2);

// cach 1:
// if (chuoi1 === chuoi2) {
//     console.log("hai chuỗi giống nhau");
// } else {
//     console.log("hai chuỗi không giống nhau");
// }

// cach 2
// if (chuoi1.length !== chuoi2.length) {
//     console.log("Hai chuoi khong giong nhau");
// } else {
//     let check = true
//     for (let i = 0; i < chuoi1.length; i++) {
//         if (chuoi1[i] != chuoi2[i]) {
//             check = false
//             break
//         }
//     }
//     let mess = check ? "Hai chuoi giong nhau" : "Hai chuoi khong giong nhau"
//     console.log(mess);
// }



let arr = ["a","b","-","c","-","d","-","e"];
for(let i=0; i<arr.length; i++){
    if(arr[i] =="-"){
        arr[i] = "_";
    }
}
console.log(arr);


