// cấu trúc lặp for
// for (let i = 0; i < 10; i++) {
    // khối code thực thi thỏa mãn điều kiện lặp
// }

//  hiển thị 100 số tự nhiên đầu tiên
// for(i = 0; i < 100; i++) {
//     console.log(` số tự nhiên thứ ${i+1} là ${i}`);
// }
// let count = 1;
// for(let i = 2; i < 100; i = i +2) {
//     // 49 lần lặp
//     console.log(" lần lặp thứ"+count);
//     count++;
// }
//  kết hợp js vào html để thay đổi nội dung của 1 thẻ html
//  lấy ra thẻ tbody thông qua id
// let tbody = document.getElementById("table-body");
// console.log(tbody);
// tbody.innerHTML = "<tr><td>1</td><td>Loz Fi</td></tr>";

// let box = document.getElementById("box");
// // box.innerHTML= "<h1> Hekoo World</h1>";
// box.innerText= " Đây là loz fi"

// let tbody = document.getElementById("table-body");
// console.log(tbody);
// tbody.innerHTML = "<tr><td>5x1=5</td></tr>";
// let str = "";
// for( let i = 1; i<=10; i++){
//     str = str+ `<tr><td>5 x ${i} = ${5*i}</td></tr>`
// }
// tbody.innerHTML= str;


// tính tổng của 100 số tự nhiên đầu tiên, của n số tự nhiên đầu tiên (n nhập vào ko bé hơn 0);
// let sum= 0;
// for( let i = 1; i <=100; i++){
//     sum= sum + i;
// }
// document.write(sum);


// cấu trúc lặp while và do...while

// let n=1;
// while(n!=0){
//     // thực thi khối lệnh
//     n = prompt(" Nhập vào 1 số");
// }

// cấu trúc lặp do...while
// let n;
// do{
//     // thực thi khối lệnh
//      n = +prompt(" Nhập vào 1 số");
// }while(n>=0);  // điều kiện để thực thi khối lệnh

// từ khóa break, continue
// break giúp dừng và thoát khỏi vòng lặp ngay lập tức
//  continue giuu
// for(let i =1; i<10;i++){
//     if(i==5){
//         break;
//         continue;
//     }
//     console.log(i);
// }

// cho phép nhập đến khi nhập số 0 thì dừng lại
// while(true){
//     let n = prompt(" Nhập vào 1 số bất kì");
//     if(n==0){
//         // thì dừng vòng lặp
//         break;
//     }
// }

// vòng lặp lồng nhau
// for(let i=10;i<10;i++){
//     // i chạy từ 1 đến 9 -> bảng cửu chương
//     for(let j=1;j<10;j++){
//         //  các phép toán
//     }
// }

ths = "";
for (let i = 2; i <= 10; i++) {
    ths += `<th>${i}x</th>`
}
document.getElementById("table-head").innerHTML = `<tr>${ths}</tr>`;
let trs = "";
for (let i = 2; i <= 10; i++) {
    let tds = "";
    for (let j = 2; j <= 10; j++) {
        tds += `<td>${j} x ${i} = ${i * j}</td>`
    }
    trs += `<tr>${tds}</tr>`
}
document.getElementById("table-body").innerHTML =trs;