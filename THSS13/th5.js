let array = [1, 2, 3, 4, 5, 6];
let n = prompt("Nhập vào số bất kỳ");

let check = false;
for (let i = 0; i < array.length; i++){
if (n == array[i]) {
    check = true;
  }
}
if (check == true) {
    alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau");
}