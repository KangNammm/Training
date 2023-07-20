// let age = +prompt(" Nhập tuổi vô")
// if (age>=18){
//     document.write(" Bạn được phép truy cập");
// }else
//     document.write(" FBI đang đến");

// let time = +prompt(" Please enter the time")
// if (time<18){
//     document.write(" Have a good time good trip.")
// }else
// document.write("Good evening.")

// let time = +prompt(" Please enter the time")
// if (time < 10) {
//     document.write(" Good morning.");
// } else if (time < 20) {
//     document.write(" Good day.");
// } else
//     document.write(" Good evening.");

// let number = +prompt(" Vui lập nhập vào 1 số")
// if (number%2==0){
//     document.write(" Đây là số chẵn.");
// }else
//     document.write(" Đây là số lẻ.");

// let number = +prompt(" Vui lập nhập vào 1 số")
// switch (number % 2) {
//     case 0:
//         alert(` Đây là số chẵn.`);
//         break;
//     case 1:
//         alert(` Đây là số lẻ.`);
//         break;
//     default:
//         document.write(" Không hợp lệ.")
//         break;
// }

let x = +prompt(" Vui lập nhập x")
if (x == 0) {
    document.write(" x là 0.");
} else if (x > 0) {
    document.write(" x là số nguyên dương.");
} else
    document.write(" x là số nguyên âm.");