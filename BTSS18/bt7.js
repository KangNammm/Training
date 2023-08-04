// Bai 1
let products = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100, }
];

// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
let product = {
    id: 4,
    name: "Bread",
    count: 100,
}
products.push(product);
// Xóa đối tượng có id là 2
// let id = 2;
// let findIndex = products.findIndex((value) => {
//     return id == value.id;
// })
// // console.log(findIndex);
// delete products[findIndex];
// console.log(products);

//// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
let id = 3;
let findIndex1 = products.findIndex((value) => {
    return id == value.id;
})
// console.log(findIndex1);
products[findIndex1].count = 0;
console.log(products);

// // Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không ?
// //     Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”

let name1 = "Butter";
let findIndex2 = products.findIndex((value) => {
    return name1 == value.name;
})
// console.log(findIndex2);
if (findIndex2) {
    console.log(products[findIndex2]);
} else {
    console.log("Khong co du lieu ban tim kiem");
}


// Bai 2
// class Cat {
//     constructor(weight, speed) {
//         this.weight = weight;
//         this.speed = speed;
//         this.alive = true;
//     }
// }
// class Dog {
//     constructor(name, weight, speed) {
//         this.name = name;
//         this.weight = weight;
//         this.speed = speed;
//     }
//     gau() {
//         console.log(`${this.name} gau gau`);
//     }
//     catchDog(dog) {
//         if (this.speed > dog.speed) {
//             console.log(`${this.name} bat meo`);
//             cat.alive = false;
//         } else {
//             console.log(`${this.name} khong bat duoc meo`);
//         }
//     }
// }
// const dog = new Dog("Tommy Dog", 5, 20);
// console.log(dog);
// const cat = new Cat(1, 10);
// dog.gau();
// dog.catchDog(cat);

//



// Bai 3
class User {
    role = 0;
    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}
class Admin extends User {
    role = 1;
    constructor(name, email, address, phone) {
        super(name, email, address, phone)
    }
}

let user1 = new User("abc", "abc@gmail.com", "Ha Noi", "093783874");
let user2 = new User("def", "def@gmail.com", "Ha Nam", "093383872");
let user3 = new User("aghk", "aghk@gmail.com", "Ha Noi", "0937363871");
let admin1 = new Admin("aghk", "aghk@gmail.com", "Ha Noi", "0937363871");
let arr = [user1, user2, user3, admin1];

// arr.push(user1);
// arr.push(user2);
// arr.push(user3);
// arr.push(admin1);
console.log(arr);

let deleteName1 = "abc"//prompt("Nhap ten nguoi dung muon xoa");
let findIndex3 = arr.findIndex((value) => {
    return deleteName1 == value.name;
})
if (arr[findIndex3].role == 0) {
    arr.splice(findIndex3, 1);
} else {
    console.log("Ban khong co quyen xoa thong tin admin");
}
console.log(arr);

// do {
//     let idIndex = prompt(`Nhap vao vi tri nguoi dung ban muon sua (0-${arr.length - 1})`);
// } while (idIndex < 0 || idIndex > arr.length);
// if (arr[idIndex].role == 0) {
//     let a = prompt("Nhap thong tin ban muon sua (name/email/address/phone")
//     if (a == "name" || a == "email" || a == "address" || a == "phone") {
//         arr[idIndex][a] = prompt("Nhap noi dung ban muon sua");
//     } else {
//         a = prompt("Nhap thong tin ban muon sua (name/email/address/phone")
//     }
// } else {
//     console.log("Ban khong co quyen sua thong tin admin");
// }

let admin2 = new Admin("ahdjhk", "ahdjhk@gmail.com", "Ha Noi", "0938863871");
arr.push(admin2);

let findAdmin = arr.filter((value) => {
    return 1 == value.role;
})
console.log(findAdmin);



// 



// Bài 4: Tạo dữ liệu để có thể in ra nội dung
// let id = 1;
// class Course {
//     constructor(name, complete) {
//         this.id = id++;
//         this.name = name;
//         this.complete = complete;
//     }
// }
// let course1 = new Course("HTML", "false");
// let course2 = new Course("CSS", "false");
// let course3 = new Course("Basic Of Javascript", "false");
// let course4 = new Course("Node Package Manager (npm)", "false");
// let course5 = new Course("Git", "false");
// let list = [];
// list.push(course1);
// list.push(course2);
// list.push(course3);
// list.push(course4);
// list.push(course5);
// // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// let action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// // C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.
// // Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
// function find(index) {
//     let check = false;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].id == index) {
//             check = true;
//             return index;
//         }
//     }
//     if (check == false) {
//         console.log("Không tồn tại");
//         return -1;
//     }
// }
// while (true) {
//     if (action == "c") {
//         let newCourse = prompt("Nhập khóa học bạn muốn thêm");
//         let newStatus = prompt("Nhập trạng thái hoàn thành");
//         list.push(new Course(newCourse, newStatus));
//         console.log(list);
//     } else if (action == "r") {
//         // R – In ra toàn bộ các khóa học theo mẫu trên
//         console.log(list);
//     } else if (action == "u") {
//         // U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho
//         // người dùng nhập vào tên muốn update và trạng thái mới.Update xong in lại như trên
//         let indexUpdate = prompt("Nhập vị trí bạn muốn update khóa học");
//         let indexUp = find(Number(indexUpdate));
//         list[indexUp].name = prompt("Tên khóa học bạn muốn update");
//         list[indexUp].complete = prompt("Trạng thái bạn muốn update");
//         console.log(list);
//     } else if (action == "d") {
//         // D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
//         let indexDel = prompt("Nhập vị trí bạn muốn delete");
//         let indexD = find(Number(indexDel));
//         list.splice(indexD, 1);
//         console.log(list);
//     } else if (action == "e") {
//         // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E
//         // thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
//         alert("Cảm ơn bạn đã đến với Rikkei Academy")
//         break;
//     }
//     else { }
//     action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// }



// 


// Bai 5


// let stores = [
//     { id: 1, name: "Milk", count: 100 },
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100 }
// ];
// let carts = [];
// function find(index) {
//     let check = false;
//     for (let i = 0; i < carts.length; i++) {
//         if (carts[i].id == index) {
//             check = true;
//             return index - 1;
//         }
//     }
//     if (check == false) {
//         console.log("Không tồn tại");
//         return -1;
//     }
// }
// // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// let action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// while (true) {

//     // C – Cho người dùng nhập vào tên sản phẩm muốn mua.
//     // Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
//     if (action == "c") {
//         let newId = carts.length + 1;
//         let product = prompt("Nhap vao san pham ban muon mua");
//         let index = stores.findIndex((value) => {
//             return product == value.name;
//         });
//         if (index >= 0) {
//             let indexOfCart = carts.findIndex(value => value.name == product)
//             if (indexOfCart >= 0) {
//                 carts[indexOfCart].count += 1;

//             } else {
//                 carts.push({ id: newId, name: product, count: 1 });
//             }
//             console.log(carts)
//             stores[index].count--;
//             console.log(stores);
//         } else {
//             console.log("Cua hang khong ban san pham nay");
//         }
//         // R – In ra toàn bộ các sản phẩm trong stores và carts
//     } else if (action == "r") {
//         console.log(stores);
//         console.log(carts);


//         // U – Hỏi người dùng vị trí update trong carts.
//         // Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó
//         // count trong stores cũng cập nhật theo.Update xong in lại stores và carts
//     } else if (action == "u") {
//         let indexUpdate = +prompt("Nhập vị trí bạn muốn update trong carts");
//         let indexUp = find(Number(indexUpdate));
//         if (indexUp >= 0) {
//             console.log("==> ", indexUp);
//             carts[indexUp].count = +prompt("Nhap so luong ban muon thay doi");
//             let indexStores = stores.findIndex(value => value.name == carts[indexUp].name);
//             stores[indexStores].count = 100 - carts[indexUp].count;
//             console.log(carts);
//             console.log(stores);
//         }
//         // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại
//     } else if (action == "d") {
//         let indexDelete = +prompt("Nhập vị trí bạn muốn xóa trong carts");
//         let indexDel = find(Number(indexDelete));
//         carts.splice(indexDel, 1);
//         console.log(carts);

//         // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người
//         // dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
//     } else if (action == "e") {
//         alert("Cảm ơn bạn đã đến với Rikkei Academy")
//         break;
//     }
//     else { }
//     action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// }