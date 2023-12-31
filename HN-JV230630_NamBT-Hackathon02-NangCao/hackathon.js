const students = [];

function getFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const hometown = document.getElementById("hometown").value;
    const gender = document.getElementById("gender").value;

    return {
        name: name,
        email: email,
        phone: phone,
        hometown: hometown,
        gender: gender,
    };
}

function valData(data) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^0[35789]\d{8}$/;

    if (!emailRegex.test(data.email)) {
        return false;
    }

    if (!phoneRegex.test(data.phone)) {
        return false;
    }

    if (data.hometown == "") {
        return false;
    }

    return true;
}

function addStudent() {
    const data = getFormData();
    if (valData(data)) {
        students.push(data);
        console.log(students);
        displayStudents();

    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("hometown").value = student.hometown;

    const saveButton = document.getElementById("save");
    saveButton.innerHTML = "Cập nhật";
    saveButton.onclick = function () {
        updateStudent(index);
    };
}

function updateStudent(index) {
    const data = getFormData();

    if (valData(data)) {
        students[index] = data;

        displayStudents();
        const saveButton = document.getElementById("save");
        saveButton.innerHTML = "Lưu lại";
        saveButton.onclick = addStudent;
    }
}

function sortStudents() {
    students.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    displayStudents();
}

function searchStudents() {
    const keyword = document.getElementById("search").value;
    const results = students.filter(function (student) {
        return student.name.toLowerCase().includes(keyword.toLowerCase());
    });

    displayStudents(results);
}

function displayStudents(list) {
    if (!list) {
        list = students;
    }
    const tbody = document.getElementById("student-body");

    tbody.innerHTML = "";

    const rows = list.map(function (student, index) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.innerHTML = `${student.name}`;
        tr.appendChild(tdName);

        const tdEmail = document.createElement("td");
        tdEmail.innerHTML = `${student.email}`;
        tr.appendChild(tdEmail);

        const tdPhone = document.createElement("td");
        tdPhone.innerHTML = `${student.phone}`;
        tr.appendChild(tdPhone);

        const tdHometown = document.createElement("td");
        tdHometown.innerHTML = `${student.hometown}`;
        tr.appendChild(tdHometown);

        const tdGender = document.createElement("td");
        tdGender.innerHTML = `${student.gender}`;
        tr.appendChild(tdGender);

        const tdEdit = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            editStudent(index);
        };
        tdEdit.appendChild(editButton);
        tr.appendChild(tdEdit);

        const tdDelete = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            deleteStudent(index);
        };
        tdDelete.appendChild(deleteButton);
        tr.appendChild(tdDelete);

        return tr;
    });

    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
}