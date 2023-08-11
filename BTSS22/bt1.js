let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");
let todoList = document.getElementById("todo-list");

let todos = [];

// Hàm để hiển thị danh sách các nhiệm vụ
function displayTodos() {

    // Xóa toàn bộ nội dung của phần tử ul
    todoList.innerHTML = "";

    // Duyệt qua mảng todos và tạo các phần tử li cho mỗi nhiệm vụ
    for (let i = 0; i < todos.length; i++) {

        // Tạo một phần tử li
        let li = document.createElement("li");
        li.className = "todo-item";

        // Tạo một phần tử input kiểu checkbox để đánh dấu hoàn thành nhiệm vụ
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todos[i].completed;

        // Tạo một phần tử span để hiển thị tên nhiệm vụ
        let span = document.createElement("span");
        span.textContent = todos[i].name;

        // Tạo một phần tử button để chỉnh sửa nhiệm vụ
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";

        // Tạo một phần tử button để xóa nhiệm vụ
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Thêm các phần tử con vào phần tử li
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Thêm sự kiện click cho checkbox để đổi trạng thái hoàn thành của nhiệm vụ
        checkbox.addEventListener("click", function () {
            // Lấy chỉ số của nhiệm vụ trong mảng todos
            let index = Array.prototype.indexOf.call(todoList.children, this.parentNode);

            // Đổi giá trị của thuộc tính completed của nhiệm vụ
            todos[index].completed = !todos[index].completed;

            // Lưu dữ liệu vào localStorage
            saveTodos();
        });

        // Thêm sự kiện click cho edit button để chỉnh sửa tên nhiệm vụ
        editButton.addEventListener("click", function () {
            // Lấy chỉ số của nhiệm vụ trong mảng todos
            let index = Array.prototype.indexOf.call(todoList.children, this.parentNode);

            // Lấy tên nhiệm vụ hiện tại
            let oldName = todos[index].name;

            // Nhập tên nhiệm vụ mới từ người dùng
            let newName = prompt("Enter a new name for the task", oldName);

            // Nếu tên mới không rỗng và khác tên cũ, thì cập nhật tên nhiệm vụ
            if (newName && newName !== oldName) {
                todos[index].name = newName;

                // Hiển thị lại danh sách các nhiệm vụ
                displayTodos();
                // Lưu dữ liệu vào localStorage
                saveTodos();
            }
        });

        // Thêm sự kiện click cho delete button để xóa nhiệm vụ
        deleteButton.addEventListener("click", function () {
            // Lấy chỉ số của nhiệm vụ trong mảng todos
            let index = Array.prototype.indexOf.call(todoList.children, this.parentNode);

            // Xóa nhiệm vụ khỏi mảng todos
            todos.splice(index, 1);

            // Hiển thị lại danh sách các nhiệm vụ
            displayTodos();

            // Lưu dữ liệu vào localStorage
            saveTodos();
        });

        // Thêm phần tử li vào phần tử ul
        todoList.appendChild(li);
    }
}

// Hàm để lưu dữ liệu vào localStorage
function saveTodos() {
    // Chuyển đổi mảng todos thành chuỗi JSON
    let json = JSON.stringify(todos);

    // Lưu chuỗi JSON vào localStorage với khóa là "todos"
    localStorage.setItem("todos", json);
}

// Hàm để lấy dữ liệu từ localStorage
function loadTodos() {
    // Lấy chuỗi JSON từ localStorage với khóa là "todos"
    let json = localStorage.getItem("todos");

    // Nếu chuỗi JSON không rỗng, thì chuyển đổi thành mảng JavaScript và gán cho biến todos
    if (json) {
        todos = JSON.parse(json);
    }
}

// Thêm sự kiện click cho add button để thêm nhiệm vụ mới vào danh sách
addButton.addEventListener("click", function () {
    // Lấy giá trị nhập vào từ người dùng
    let todoName = todoInput.value;

    // Nếu giá trị không rỗng, thì tạo một đối tượng todo mới và thêm vào mảng todos
    if (todoName) {
        let todo = {
            name: todoName,
            completed: false
        };
        todos.push(todo);

        // Xóa giá trị nhập vào trong phần tử input
        todoInput.value = "";

        // Hiển thị lại danh sách các nhiệm vụ
        displayTodos();

        // Lưu dữ liệu vào localStorage
        saveTodos();
    }
});

// Gọi hàm loadTodos khi trang web được tải lên để lấy dữ liệu từ localStorage
loadTodos();

        // Gọi hàm displayTodos khi trang web được tải lên để hiển