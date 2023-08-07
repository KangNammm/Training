let items = ["Backpack", "MiBand watch", "Ring"]
console.log(items);

let list = document.getElementById("list")

function veListItems(items) {
    for (let i = 0; i < items.length; i++) {
        // ý nghĩa: insertAdjacentHTML là hàm cho phép ghi thêm HTMl 
        // beforeend: là ghi vào trong thẻ cha
        // `<li>${items[i]}</li>`: là thẻ con muốn ghi vào
        list.insertAdjacentHTML("beforeend", `<li>${items[i]} <button onclick="xoa(${i})">Remove</button></li>`)
    }
}
veListItems(items)

// xóa item test
// list.children[0].remove()
// list.children[1].remove()

// lấy ra ô input và nút add
let inputText = document.getElementById("input_text")
let btnAdd = document.getElementById("btn_add")

console.log(inputText);
console.log(btnAdd);

// bắt sự kiện cho nút add
btnAdd.addEventListener("click", () => {
    items.push(inputText.value)
    list.innerHTML = "" // xoa tat ca trong ul
    veListItems(items)
    inputText.value = ""
})

function xoa(vitri) {
    items.splice(vitri, 1) // xoa trong mang items
    list.innerHTML = "" // xoa tat ca trong ul
    // ve lai ul
    veListItems(items)
    console.log(items);
}