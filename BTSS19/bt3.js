// let hien = document.getElementById("Hien")
// let an = document.getElementById("An")
// let h = document.getElementById("hone")
// an.addEventListener("click", function () {
//     h.style.opacity = "0"
// })
// hien.addEventListener("click", function () {
//     h.style.opacity = "1"
// })


//



//  2
// let hien = document.getElementById("hien")
// let box = document.getElementById("box")
// let an = document.getElementById("an")
// let color = document.querySelector("#color")
// hien.addEventListener("click", function () {
//     box.style.display = "block"
//     color.style.display = "block"
// })
// an.addEventListener("click", function () {
//     box.style.display = "none"
//     color.style.display = "none"
// })



//



//3
// let red = document.getElementById("red")
// let blue = document.getElementById("blue")
// let yellow = document.getElementById("yellow")
// let body = document.querySelector("body")
// red.addEventListener("mouseenter", () => {
//     body.style.backgroundColor = "rgb(255, 216, 216)"
// })
// blue.addEventListener("mouseenter", () => {
//     body.style.backgroundColor = "rgb(192, 192, 255)"
// })
// yellow.addEventListener("mouseenter", () => {
//     body.style.backgroundColor = "rgb(250, 255, 206)"
// })


//4
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let body = document.querySelector("body")
let h = document.querySelector("body > h1")
let p = document.querySelector("body > p")
btn2.addEventListener("click", function () {
    body.style.backgroundColor = "white"
    h.style.color = "black"
    p.style.color = "black"
    btn2.style.display = "none"
    btn.style.display = "block"
})
btn.addEventListener("click", function () {
    body.style.backgroundColor = "black"
    h.style.color = "white"
    p.style.color = "white"
    btn2.style.display = "block"
    btn.style.display = "none"
})