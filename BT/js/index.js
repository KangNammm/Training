const data = [
    { id: 1, name: "Jun Vu", age: 25, img: "jun2.jpg" },
    { id: 2, name: "Yoonsul", age: 21, img: "yoonsul4.jpg" },
    { id: 3, name: "Arian Greeze", age: 23, img: "yoonsul2.webp" },
    { id: 4, name: "XiaoZhao Ling", age: 18, img: "yoonsul1.jpg" },
] // mảng dữ liệu có sẵn

let idGlobal = 5 // biến tự tăng id
let indexUpdateGlobal = null // biến lưu xem đang sửa người ở vị trí nào

const inputName = document.getElementById("name")   // ô nhập tên
const inputAge = document.getElementById("age") // ô nhập tuổi
const inputImg = document.getElementById("img")     // ô nhập ảnh

// hàm vẽ bảng dữ liệu
function drawTable() {
    // chuỗi dùng để nối chuỗi các hàng
    let stringHTML = ""
    // vòng lặp để nối các hàng
    data.forEach(e => stringHTML +=
        `
    <tr>
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>
            <img src="./img/${e.img}" alt="img">
        </td>
        <td>
            <div class="action_col">
                <button class="btn btn_sua" onclick="toggleForm(${e.id})">Edit</button>
                <button class="btn btn_xoa" onclick="deletePerson(${e.id})">Delete</button>
            </div>
        </td>
    </tr>
    `)
    // vẽ lại bảng dữ liệu bằng dữ liệu mới nhất
    document.getElementById("table_body").innerHTML = stringHTML
}
// gọi hàm vẽ bảng dữ liệu lần đầu lúc mới chạy code
drawTable()

// hàm ẩn hiện form nhập, nếu có truyền id thì là mở form để sửa, còn nếu ko truyền id thì là mở form để thêm
function toggleForm(id) {
    // ẩn hiện form
    document.getElementById("form_scope").classList.toggle("hide")

    // nếu có id thì cập nhật dữ liệu của phần tử cần sửa lên form để sửa
    if (id != undefined) {
        // tìm vị trí của sản phẩm cần sửa
        const indexUpdate = data.findIndex(e => e.id == id)
        // ghi nhớ vị trí đó vào biến global để hàm khác còn dùng
        indexUpdateGlobal = indexUpdate
        // gán gia trị của từng trường vào từng ô input tương ứng, hình ảnh thì tạm thời chưa làm
        inputName.value = data[indexUpdate].name
        inputAge.value = data[indexUpdate].age
    } else { // nếu không có id thì làm sạch biến global và xóa trắng form để mỗi lần mở form ra đều mới tinh, ko bị dính data đang nhập dở lần trước
        indexUpdateGlobal = null
        document.getElementById("form").reset()
    }
}

// sự kiện submit form
document.getElementById("form").addEventListener("submit", function (e) {
    // tránh việc load lại trang khi submit, vì load lại trang là như bấm open liveserver, mất hết dữ liệu đang làm việc
    e.preventDefault()

    // nếu có indexUpdateGlobal thì submit là để cập nhật lại thông tin ở vị trí indexUpdateGlobal
    if (indexUpdateGlobal != null) {
        // sửa từng trường của nhân viên bằng các biến mà người dùng nhập lại
        data[indexUpdateGlobal].name = inputName.value
        data[indexUpdateGlobal].age = input.value
        // riêng cái ảnh vì ko đẩy lên được lúc click nút edit nên phải check xem ng dùng có chọn ảnh mới ko
        // nếu có thì gán ảnh mới cho trường img
        // nếu ko thì thôi
        if (inputImg.value) {
            let img = inputImg.value
            img = img.split("\\")
            img = img[img.length - 1]
            data[indexUpdateGlobal].img = img
        }
        // sau khi update thành công thì đưa indexUpdateGlobal về null như ban đầu để chờ lần edit tiếp
        indexUpdateGlobal = null
        // xóa các trường trong form
        this.reset()
        // ẩn form
        toggleForm()
        // vẽ lại bảng
        drawTable()
        // thoát hàm
        return
    }

    // nếu ko có indexUpdateGlobal thì submit là để thêm mới nhân viên
    // lấy link ảnh
    let img = inputImg.value
    img = img.split("\\")
    img = img[img.length - 1]
    // tạo object nhân viên mới
    const person = {
        id: idGlobal,
        name: inputName.value,
        age: inputAge.value,
        img
    }
    // vì đã gán idGlobal mới nhất cho nhân viên phía trên nên tăng idGlobal lên 1 để cho lần làm việc tiếp theo
    idGlobal++
    // thêm người vào mảng data
    data.push(person)
    // xóa các trường trong form
    this.reset()
    // ẩn form
    toggleForm()
    // vẽ lại bảng
    drawTable()
})

// xóa phần tử được chọn theo id
function deletePerson(id) {
    // tìm vị trí cần xóa
    const indexDelete = data.findIndex(e => e.id == id)
    // hỏi xem ng dùng có muốn xóa
    const result = confirm(`Delete ${data[indexDelete].name}`)
    // nếu có thì xóa
    if (result) {
        // xóa
        data.splice(indexDelete, 1)
        // vẽ lại mảng
        drawTable()
    }
}

