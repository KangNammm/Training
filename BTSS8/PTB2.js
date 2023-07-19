let a = prompt("Nhap gia tri a");
let b = prompt("Nhap gia tri b");
let c = prompt("Nhap gia tri c");
if (a == 0) {
} else {
    let delta = Math.pow(b, b) - 4 * a * c;
    if (delta == 0) {
        let x = (-b / (2 * a));
        document.write(" Phuong trinh co nghiem kep", x);
    } else if (delta < 0) {
        document.write(" Phuong trinh vo nghiem");
    } else {
        document.write(" Phuong trinh co 2 nghiem phan biet");
        let x1 = (- b + Math.sqrt(delta)) / (2 * a);
        let x2 = (- b - Math.sqrt(delta)) / (2 * a);
        document.write(" Nghiem x1 = ", x1);
        document.write(" Nghiem x2 =", x2);
    }
}

