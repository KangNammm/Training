// let arrayAnimals = ["Lion","Tiger","Wolf","Kangaroo"];
// let string = arrayAnimals.join(",");
// console.log(string);

// let string = "245468";
// let arr = [];
// for( let i=0; i < string.length; i++){
//     arr.push(string.charAt(i))
//     if(string.charAt(i)%2==0 && string.charAt(i+1)%2==0){
//         arr.push("-");
//     }
// }
// console.log(arr.join(""));


// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường 
// trong chuỗi vừa nhập sang thành dạng chữ hoa.
// Ví dụ: nếu bạn nhập vào chuỗi 'Keep Calm And Code On' 
// kết quả của chương trình là 'kEEP cALM aND cODE oN'.

let chuHoa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // khai báo bảng chữ hoa
let chuThuong = 'abcdefghijklmnopqrstuvwxyz'; // khai báo bảng chữ thường
// ==> độ dài hai bảng như nhau và vị trí các chữ tương ứng như nhau

let chuoi = prompt("Nhap vao mot chuoi ma ban muon") // cho người dùng nhập
let ketQua = [] // biến lưu kết quả

// vòng lặp để kiểm tra từng chữ trong chuỗi nhập và chuyển đổi nó thành hoa thường
for (let i = 0; i < chuoi.length; i++) {
    // nếu là dấu khoảng trắng thì thêm luôn vào kết quả mà ko cần kiểm tra
    if (chuoi[i] == " ") {
        ketQua.push(" ")
        continue
    }

    // nếu là chữ thì đi kiểm tra với từng chữ trong bảng chữ cái
    for (let j = 0; j < chuHoa.length; j++) {
        // nếu là chữ Hoa thì đổi thành chữ Thường
        // nếu là chữ Thường thì đổi thành chữ Hoa
        if (chuoi[i] == chuHoa[j]) {
            ketQua.push(chuThuong[j])
        } else if (chuoi[i] == chuThuong[j]) {
            ketQua.push(chuHoa[j])
        }
    }
}

console.log(ketQua.join(""));