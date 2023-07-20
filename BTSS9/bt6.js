let weight = +prompt(" Nhap can nang(kg)");
let height = +prompt(" Nhap chieu cao(cm)");
let bmi = weight / (height * height);
if (bmi < 18.5) {
    document.write(" Ban nhe");
} else if (bmi < 25) {
    document.write(" Thua can");
} else if (bmi < 29.9) {
    document.write(" Tien beo phi");
} else if (bmi < 34.9) {
    document.write(" Beo phi cap 1");
} else if (bmi < 39.9) {
    document.write(" Beo phi cap 2");
} else if (bmi < 40) {
    document.write(" Beo phi cap 3");
} else
    document.write(" Beo phi cap 3");
