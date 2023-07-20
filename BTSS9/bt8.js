let a = +prompt(" Nhập số a");
let b = +prompt(" Nhập số b");
let pheptinh = prompt(" Nhập số phép tính");

switch (pheptinh) {
    case "+":
        alert(` Kết quả là = ${+a + b}`)
        break;
    case "-":
        alert(` Kết quả là = ${+a - b}`)
        break;
    case "*":
        alert(` Kết quả là = ${+a * b}`)
        break;
    case "/":
        alert(` Kết quả là = ${+a / b}`)
        break;
    default:
        document.write(" Em sai rồi.")
        break;
}