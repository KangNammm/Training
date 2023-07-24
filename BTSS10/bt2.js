// let m = +prompt(" Nhập m")
// let feet = (m*3.2808)
// document.write(" feet là: ", feet)

// let a = +prompt(" Nhập độ dài 1 cạnh")
// let Shinhvuong = Math.pow(a,2)
// document.write(" Diện tích hình vuông là: ", Shinhvuong)

// let a = +prompt(" Nhập chiều dài")
// let b = +prompt(" Nhập chiều rộng")
// let Shinhchunhat = (a*b)
// document.write(" Diện tích hình chữ nhật là: ", Shinhchunhat)

// let a = +prompt(" Nhập cạnh góc vuông 1")
// let b = +prompt(" Nhập cạnh góc vuông 2")
// let Stamgiacvuong = (a*b)/2
// document.write(" Tam giác là tác giam:", Stamgiacvuong)

// let a = +prompt(" Nhập a")
// let b = +prompt(" Nhập b")
// let x = (-b/a)
// document.write(" Nghiệm của phương trình bậc 1 là:", x)

// let age = +prompt(" Nhập 1 số tuổi bất kì")
// if (age>0 &&age<120){
//     alert(" Đây là tuổi của con người")
// }

// let a = +prompt(" Nhap so tien dien");
// let x;
// if(a<=50){
//     x=a*1678 
// }else if( a<=100){
//     x=(50*1734)+(50*1678)
// }else if( a<=200){
//     x=(50*1734)+(50*1678)+(100*2014)
// }else if( a<=300){
//     x=(50*1734)+(50*1678)+(100*2014)+(100*2536)
// }else if( a<=400){
//     x=(50*1734)+(50*1678)+(100*2014)+(100*2536)+(100*2834)
// }else{
//     x=(50*1734)+(50*1678)+(100*2014)+(100*2536)+(100*2834)+(100*2927)
// }
// alert(` Số tiền điện là ${x} đồng`);

let date = prompt("Nhập vào ngày sinh của bạn:");
let month = prompt("Nhập vào tháng sinh của bạn:");
let zodiac = "";
switch (month) {
    case "1":
        if (date <= 19) {
            zodiac = "Ma Kết";
        } else {
            zodiac = "Bảo Bình";
        }
        break;
    case "2":
        if (date <= 18) {
            zodiac = "Bảo Bình";
        } else {
            zodiac = "Song Ngư";
        }
        break;
    case "3":
        if (date <= 20) {
            zodiac = "Song Ngư";
        } else {
            zodiac = "Bạch Dương";
        }
        break;
    case "4":
        if (date <= 19) {
            zodiac = "Bạch Dương";
        } else {
            zodiac = "Kim Ngưu";
        }
        break;
    case "5":
        if (date <= 20) {
            zodiac = "Kim Ngưu";
        } else {
            zodiac = "Song Tử";
        }
        break;
    case "6":
        if (date <= 21) {
            zodiac = "Song Tử";
        } else {
            zodiac = "Cự Giải";
        }
        break;
    case "7":
        if (date <= 22) {
            zodiac = "Cự Giải";
        } else {
            zodiac = "Sư Tử";
        }
        break;
    case "8":
        if (date <= 22) {
            zodiac = "Sư Tử";
        } else {
            zodiac = "Xử Nữ";
        }
        break;
    case "9":
        if (date <= 22) {
            zodiac = "Xử Nữ";
        } else {
            zodiac = "Thiên Bình";
        }
        break;
    case "10":
        if (date <= 23) {
            zodiac = "Thiên Bình";
        } else {
            zodiac = "Bọ Cạp";
        }
        break;
    case "11":
        if (date <= 21) {
            zodiac = "Bọ Cạp";
        } else {
            zodiac = "Nhân Mã";
        }
        break;
    case "12":
        if (date <= 21) {
            zodiac = "Nhân Mã";
        } else {
            zodiac = "Ma Kết";
        }
}
alert("Bạn thuộc chòm sao: " + zodiac);


// function
//     let a = document.getElementById('a').value;
// let b = document.getElementById('b').value;
// let result = a + b; document.getElementById('result')
