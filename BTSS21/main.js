let data = {id : 1, name : "Nguyen Van A"};
// ko ép kiểu json
localStorage.setItem("data",JSON.stringify(data));
localStorage.setItem("string"," Oh my godness");
localStorage.setItem("number",3107);
localStorage.setItem("boolean",false);
localStorage.setItem("char",'c');
let array = [[1,2],[3,4]];
console.log(array);
localStorage.setItem("array",[1,2,3,4]);
localStorage.setItem("array",JSON.stringify(array));
console.log(JSON.parse(localStorage.getItem("array")));

// lấy dữ liệu về
let dataGetLocal = JSON.parse(localStorage.getItem("data"));
console.log(dataGetLocal);

// JSON.stringify() là chuyển về chuỗi JSON

// JSON.parse() là lấy từ JSON về thành đối tượng

// sesstionStorage
sessionStorage.setItem("data",JSON.stringify(data));

// xóa 1 phần tử theo key của local và sesstion giống nhau về cú pháp
localStorage.removeItem("data")
localStorage.removeItem("char")
localStorage.clear();


// cú pháp của cookies
document.cookie = "username = Oh my godness; expires=0"; 
document.cookie = "password = Oh my godness; expires=0"; 
document.cookie = "username = Oh my godness; expires=0";

// lấy ra và xử lí cookie 
let cookie = document.cookie;
console.log(cookie);
let arrayCookie = cookie.split("; ")
console.log(arrayCookie);
