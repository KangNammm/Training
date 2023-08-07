// DOM - Document Object Model
// truy cập 1 phần tử của dom bằng js
// truy cập qua id
let table = document.getElementById("table");
console.log({table});

// truy cập thông qua class
let tds = document.getElementsByClassName("td");
console.log(tds);

// truy cập thông qua tên thẻ
let trs = document.getElementsByTagName("tr");
console.log(trs);

// sử dụng bộ chọn
let td = document.querySelectorAll("td.td");
console.log(td);


//// training


// let div = document.getElementById("div");
// console.log(div);
// let h2 = document.getElementsByClassName("h2");
// console.log(h2);
// let span = document.getElementsByTagName("span");
// console.log(span);
// let span1 = document.querySelector("div>span");
// console.log(span1);
// let span2 = document.querySelectorAll("div>span");
// console.log(span2);

// cách di chuyển vị trí phần tử
// di chuyển về node cha


// // gọi thằng đứng trước p
// let p = document.querySelector(".box p")
// console.log(p.previousElementSibling);

// // gọi thằng đằng sau p
// let p2 = document.querySelector(".box p")
// console.log(Path2D.nextElementSibling);


// // cách gọi từ thằng con sang thằng cha
// let box = document.querySelector(".box h2").parentNode;
// console.log(box);

// // gọi thằng đầu tiên
// console.log(document.querySelector("tr").firstElementChild);
// // gọi thằng cuối cùng
// console.log(document.querySelector("tr").lastElementChild);


// cách dùng mousedown, mouseup, mouseover, mouseout, mousemove, click, dblclick
let box = document.querySelector(".btn");
console.log(box);
box.addEventListener("click", function(){
    alert(" Ban vua mousedown vao the div.btn")
});

// bàn phím lắng nghe kết nối dùng keydown, keyup, keypress,scroll
window.addEventListener("scroll", function(e){
    console.log(" ban vua dung thanh cuon");
})