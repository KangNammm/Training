function Circle(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}
function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let circle = new Circle(100,50,40);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0,2*Math.PI);
    ctx.fill();
}
createCircle();

function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 function getRandomHex() {
    return Math.floor(Math.random()*255);
 }
 function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
 }
 function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let circle = new Circle(100, 50, 40);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
 }
 createCircle();


 function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 function getRandomHex() {
    return Math.floor(Math.random() * 255);
 }
 function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
 }
 function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 60);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
 }
 createCircle();


 function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 function getRandomHex() {
    return Math.floor(Math.random() * 255);
 }
 function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
 }
 function createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
 }
 createCircle();
 createCircle();


 function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
 }
 function getRandomHex() {
    return Math.floor(Math.random() * 255);
 }
 function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
 }
 function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
 }
 function createMultipleCircle() {
    for (let i = 0; i < 30; i++) {
        createCircle();
    }
 }
 createMultipleCircle();