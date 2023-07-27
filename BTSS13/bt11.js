// Bài tập 11: shopping

// mảng các sản phẩm có ở cửa hàng
const bakery = ["socola", "chuoi", "cam", "tao", "xoai"];
// mảng các sản phẩm đã mua
const cart = []

// in ra các sản phẩm có ở cửa hàng
console.log(bakery);

let traLoi = "" // lưu câu trả lời để biết xem có mua nữa hay không
while (traLoi != "no") {
    // nhập sản phẩm muốn mua
    let sanPham = prompt("Nhap vao san pham ban muon")

    // dùng làm includes để xem sản phẩm đó có trong mảng bakery hay không (hàm này mọi người tự tìm hiểu)
    // nếu có thì tiến hành thêm hoặc cập nhật
    if (bakery.includes(sanPham)) {
        let check = false // biến lưu kết quả xem có trong giở hay chưa
        let vitri // biến lưu vị trí của sản phẩm trong giỏ nếu sản phẩm đã có
        // vòng lặp kiểm tra xem có trong giỏ hay chưa
        for (let i = 0; i < cart.length; i++) {
            // nếu có trong giỏ thì lưu lại vị trí trong giỏ và cập nhật true để xác nhận đã có
            if (sanPham == cart[i][0]) {
                check = true
                vitri = i
            }
        }

        // nếu chưa có trong giỏ thì thêm vào giở với số lượng ban đầu là 1
        if (check == false) {
            cart.push([sanPham, 1])
        } else { // nếu có rồi thì tăng số lượng lên 1
            cart[vitri][1] += 1
        }

        console.log(cart); // sau khi thêm hoặc cập nhật lại giỏ thì in ra giỏ để xem

        // vòng lặp nhập câu trả lời
        do {
            traLoi = prompt("Ban co muon mua nua khong")
        } while (traLoi != "yes" && traLoi != "no")
        // nếu yes thì mua tiếp
        // nếu no thì thoát chương trình
        if (traLoi == "yes") {
            continue
        } else {
            break;
        }
    } else { // nếu ko có sản phẩm bạn muốn trong cửa hàng thì in ra là không có
        console.log("Cua hang ko co san pham nay");
    }
}