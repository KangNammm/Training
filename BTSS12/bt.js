// nhập vào các số nguyên đến khi nhập số 0 thì dừng lại
//  hiển thị tổng của các số vừa nhập

// let n = 1;
// let sum = 0;
// while (n != 0) {
//     n = +prompt(" Nhap 1 so bat ki");
//     if (n % 2 == 0) {
//         sum += n
//     }
// }
// alert(" Tong cua cac so vua nhap la :" + sum);

// kiểm tra 1 số nhập vào có phải số hoàn hảo hay ko
// b1 nhập vào 1 số
// b2 kiểm tra từ 1 -> chính nó, nếu là ước của số đó thì thực hiện tính tổng
// b3 kết thúc vòng lặp tiến hành so sánh tổng thu đc với chính nó và đưa ra kết luận

// let number = +prompt(" Nhap vao 1 so");
// let sum = 0;
// for(let i = 1; i < number; i++){
//     if(number%i==0){
//         sum +=i;
//     }
// }
// if(sum == number){
//     alert(`${number} la so hoan hao.`)
// }else{
//     alert(`${number} ko la so hoan hao.`)
// }

// let j = "";
// for (let i = 1; i <= 5; i++) {
//     j += "*";
//     document.writeln(j);
// }

// for(let i=1;i<=5;i++){
//     for(let j=1; j<=9; j++){
//         if(i+j >= 6 && j-i <=4){
//             document.write("*");  
//         }else{
//             document.write(" ");
//         }
//     }
//     document.writeln();
// }

// let count = 1;
// let number;

// let random = Math.round(Math.random() * 9) + 1;
// console.log(random);
// while (count <= 3) {
//   number = +prompt("Nhập số muốn đoán  1-10");
//   if (count == 3) {
//     // nếu lượt đoán thứ 3
//     if (number == random) {
//       alert("you win");
//       break;
//     } else {
//       alert("you lose");
//     }
//   } else {
//     // chưa đến lượt thứ 3
//     if (number == random) {
//       alert("you win");
//       break;
//     } else if (number < random) {
//       alert(`Lơn hơn ${number} , bạn còn ${3 - count} lần`);
//     } else {
//       alert(`Bé hơn ${number} , bạn còn ${3 - count} lần`);
//     }
//   }
//   count++;
// }


// in ra 20 số fibonacci
// f0 = 0, f1 = 1,...
//  đếm số lượng in ra
//  let count = 0;
// let a = 0;
// let b = 1;
// for(i=0; i<20; i++){
//     if(i==0){
//         // fo = 0
//         console.log(a);
//     }else if (i==2){
//         // f1 = 1
//         console.log(b);
//     }else {
//         let c = a+b
//         a=b;
//         b=c;
//         console.log(c);
//         // fn = fn-1+fn=2
//     }
// }

// let number = 1;
// let count = 0;
// let sum = 0;
// while(count <30){
//     if(number%7==0){
//         sum += number;
//         count++;
//     }
//     number++;
// }
// console.log(sum);

// for(i=1; i<=100; i++){
//     console.log(i);
//     if(i==99){
//         alert(" Da hoan thanh")
//     }
// }

// let N = +prompt(" Nhap vao 1 so bat ki");
// let sum = 0;
// if(N>0){
//     for(i=1; i<=N; i++){
//         sum +=i
//     }
//     console.log(sum);
// }

// let N = +prompt(" Nhap 1 so bat ki");
// let sum = 1;
// if(N>0){
//     for(i=1; i<=N; i++){
//         sum *=i
//     }
//     console.log(sum);
// }

// let n = +prompt(" Nhap 1 so bat ki")
// let sum = 0;
// if(n>0){
//     for(i=1; i<=n; i++){
//         sum +=(1/i)
//     }
//     console.log(sum);
// }

// let N = +prompt(" Nhap vao 1 so bat ki");
// let sum = 0;
// if(N>1){
//     for(i=2; i<=N; i++){
//         sum = sum + (1/(i-1))*(1/i);
//     }
//     console.log(sum);
// }

// let n;
// do {
//     n = +prompt(" Nhap vao 1 so tu 1 den 9");
// } while (n < 1 || n > 9);
// let str;
// for (i = 1; i <= 10; i++) {
//     str = n * i;
//     console.log(`${n}x${i}=${str}`);
// }

// let count = +prompt(" Nhap 1 so bat ki");
// let a = 0; 
// let b = 1;
// for(i=0; i<=count; i++){
//     if(i==0){
//         console.log(a);
//     }else if(i==2){
//         console.log(b);
//     }else{
//         let c = a+b;
//         a=b;
//         b=c;
//         console.log(c);
//     }
// }

// let N;
// do {
//     N = +prompt(" Nhap vao 1 so bat ki");
// }while (N <= 0);
// for (i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} - chan`);
//     } else {
//         console.log(`${i} - le`);
//     }
// }

// let N;
// do {
//     N = +prompt(" Nhap vao 1 so  bat ki");
// } while (N <= 0);
// for (i = 0; i <= N; i+=2) {
//         console.log(i);
//     } 
// for (i = 1; i <= N; i+=2) {
//         console.log(i);
// } 

// 11.Viết một đoạn mã mô phỏng máy ATM. 
// Cho người dùng nhập vào số tiền cần rút. 
// Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá. 
// Biết máy ATM chỉ rút được 3 loại mệnh giá là 500.000, 200.000, 100.000, 50.000. 
// Biết số tiền tối thiểu rút một lần là 50.000

let tien = 0; // khai báo biến lưu trữ số tiền nhập vào
let a = b = c = d = 0; // khai báo lần lượt các biến đếm số lượng các tờ tiền 500, 200, 100, 50; let a = 0; let b = 0....


// vòng lặp nhập tiền
do {
    tien = prompt("Nhap so tien ban muon rut")
} while (tien <= 0 || tien % 50000 !== 0); // không được nhập tiền âm, tiền = 0 và không chia hết cho 50.000

// vòng lặp khi còn tiền thì sẽ tính toán trừ tiền
while (tien > 0) {
    //nếu tiền lớn hơn 500.000 thì sẽ rút được 1 tờ 500.000 và khi nhỏ hơn thì tương tự cho các tờ tiền khác
    if (tien >= 500000) {
        tien -= 500000
        a++
    } else if (tien >= 200000) {
        tien -= 200000
        b++
    } else if (tien >= 100000) {
        tien -= 100000
        c++
    } else {
        tien -= 50000
        d++
    }
}

// kiểm tra xem có tờ nào và có bao nhiêu tờ thì in ra
if (a > 0) {
    console.log(`500000 - ${a}`)
}
if (b > 0) {
    console.log(`200000 - ${b}`)
}
if (c > 0) {
    console.log(`100000 - ${c}`)
}
if (d > 0) {
    console.log(`50000 - ${d}`)
}