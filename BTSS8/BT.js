let diemVatli = prompt("Hãy nhập điểm Vật lí");
console.log(diemVatli);
let diemHoahoc = prompt("Hãy nhập điểm Hóa học");
console.log(diemHoahoc);
let diemSinhhoc = prompt("Hãy nhập điểm Sinh học");
console.log(diemSinhhoc);

let diemTrungBinh = (Number(diemVatli) + Number(diemHoahoc) + Number(diemSinhhoc))/3;
console.log(diemTrungBinh);

let diemTong = (Number(diemVatli) + Number(diemHoahoc) + Number(diemSinhhoc));
console.log(diemTong);


let doC = prompt("Hãy nhập độ C");
let doF = (Number(doC * 9) / 5 + 32);
document.write("Nhiệt độ F là: ", doF)

let r = prompt("Hãy nhập bán kính");
let Shinhtron = (Number(r) * Number(r) * 3.14);
document.write("Diện tích hình tròn là:", Shinhtron); 

let bankinh = prompt("Hãy nhập bán kính.");
let Chinhtron = (Number(bankinh) *2 * 3.14);
document.write("Chu vi hình tròn là:", Chinhtron); 

