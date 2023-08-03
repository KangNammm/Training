// // cú pháp khởi tạo đói tượng
// // cách 1 ;
// let fi = {
//     name: " Nguyễn Wang Fi",
//     age: "69",
//     class: " HN-JAV",
//     move: function () {
//         console.log(" Đi như tụi mỹ");
//     }
// };
// console.log(fi);
// // truy cập 1 thuộc tính hoặc phương thức sử dụng dấu .
// console.log(fi.move());
// fi.age = "68+1";
// console.log(fi.age);

// // cách 2 : định nghĩa giống như hàm để định nghĩa 1 lớp
// function students(name, age, className, maSV) {
//     console.log(this); // đại diện cho đối tượng sinh ra từ lớp, hàm đó
//     this.name = name; // gán giá trị tham số name cho thuộc tính fullname
//     this.age = age;
//     this.className = className;
//     this.maSV = maSV;
//     this.move = () => {
//         console.log(" Vừa bò vừa đi");
//     }
// }

// // cách 3 sử dụng class trong es6
// class Students {
//     // khai báo các thuộc tính 
//     // fullname;
//     // age;
//     // className;
//     // maSV;
//     // tạo constructor để gán giá trị ban đầu lúc khởi tạo
//     constructor(fullname, age, className, maSV) {
//         this.fullname = fullname;
//         this.age = age;
//         this.className = className;
//         this.maSV = maSV;

//         move = () => {
//             console.log(" Đi như bò");
//         }
//     }
//     // định nghĩa các phương thức
// }


// let fii = new students(" Fii", 69, "JAVV", "SOS");
// console.log(fii);

//         move = () => {
//             console.log(" Đi như bò");
//         }
//     }
//     // định nghĩa các phương thức
// }

// let huy = {
//     namee: " Nguyen Wang Fi",
//     age: "25",
//     hometown: "Lao Cai",
// }
// console.log(huy);

// function tml(name, age, hometown) {
//     console.log(this);
//     this.name = name;
//     this.age = age;
//     this.hometown = hometown;
// }
// let fiii = new tml(" Wang Fi", 69, "LC");
// // duyệt đối tượng
// for (const key in fii) {
//     console.log(fii[key]);
// }

// // tạo lớp hình học
// class Shape {
//     constructor ( color){
//         this.color = color;
//         this.area = 0;
//         this.perimeter = 0;
//     }
// }

// // tạo lớp hình tam giác
// class Triangle extends Shape{
//     constructor (a,b,c,color){
//         super (color); // gọi 
//         this.a = a;
//         this.b = b;
//         this.c = c;
//         this.getPerimeter=()=>{
//             return this.a+this.b+this.c;
//         }
//         this.getArea=()=>{
//             // công thức heron
//             // tính nửa chu vi
//             let p = this.getPerimeter/2;
//             return Math.sqrt(p*(p-a)*(p-b)*(p-c));
//         }
//     }
// }

// // tạo lớp hình tròn
// class Circle extends Shape{
//     constructor (radius,color){
//         super (color);
//         this.radius = radius;
//         this.area =Math.PI*Math.pow(this.radius,2)
//         this.perimeter = Math.PI*this.radius
//     }
// }
// let circle1 = new Circle (5,"purple")
// console.log(circle1);

// // tạo lớp hình học
// class Shape {
//     constructor ( color){
//         this.color = color;
//         this.area = 0;
//         this.perimeter = 0;
//     }
// }


// // tạo lớp hình chữ nhật
// class Rectangle extends Shape{
//     constructor (a,b, color){
//         super (color);
//         this.a = a;
//         this.b = b;
//         this.area=this.a*this.b
//         this.perimeter=(this.a+this.b)/2
//     }
// }
// let rectangle1 = new Rectangle (4,2,"purple");
// console.log(rectangle1);
// // tạo hình vuông 
// class Squart extends Rectangle{
//     constructor (a,color){
//         super (a,a,color);
//         this.area=this.a*this.a
//         this.getPerimeter=()=>{
//             return 
//         }
//     }
// }
// let squart1 = new Square (4,"purple");
// console.log(squart1);

// tạo lớp hình tròn
// class Circle extends Shape{
//     constructor (radius,color){
//         super (color);
//         this.radius = radius;
//         this.area =Math.PI*Math.pow(this.radius,2)
//         this.perimeter = Math.PI*this.radius
//     }
// }
// let circle1 = new Circle (5,"purple")
// console.log(circle1);



// khái niệm về closure 
// khi xây dựng 1 hàm
function increase (){
    let count = 0;
    return function(){
        count++;
        document.getElementById("count").innerText = count;
    }
}
let rs = increase();