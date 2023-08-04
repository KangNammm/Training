// Bai 1:
// let info = {
//     name : " The Weeknd",
//     age : 27,
//     address : " Hai Bà Trưng, quận 1",
//     phoneNumber : "09996699"
// }
// console.log(info);


//


// Bai 2 :
class Student {
   constructor(id, name, gender, age, mark){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.mark = mark;
    }
}
let student1 = new Student (1," Nguyen Van A", "nam", 20,8);
console.log(student1);


let students = [];
    students.push(student1);
    console.log(students);

//

// Bai 3
let student2 = new Student (2," Nguyen Van B", "nam", 22,9);
students.push(student2);
console.log(student2);
if(student1.mark>student2.mark){
    console.log(student1);
} else{
    console.log(student2);
}

//

// Bai 4

let studentss = new Student (3," Nguyen Van C", "nam", 20,7);
students.push(studentss);
let overallpoint = 0;
for( let i=0; i<students.length; i++){
    overallpoint += students[i].mark;
}
let overallsum = overallpoint/students.length;
if (overallsum>=7.5) {
    console.log(" Lop kha");
}else if(overallsum>=5){
    console.log(" Lop trung binh");
}else{
    console.log(" Lop yeu");
}

