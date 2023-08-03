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
console.log(student2);
if(student1.mark>student2.mark){
    console.log(student1);
} else{
    console.log(student2);
}

//

// Bai 4
class Student2 extends Student {
    constructor( math, literature, english ,id, name, gender, age, mark, overallpoint){
        super(id, name, gender, age, mark);
        this.math = math;
        this.literature = literature;
        this.english = english;
        this.overallpoint = 0;
        this.overallpoint = (this.math+this.literature+this.english)/3
    }
}
let studentss = new Student2 (6,5,7,3," Nguyen Van C", "nam", 20,7);
console.log(studentss);
if (this.overallpoint>=7.5) {
    console.log(" Lop kha");
}else if(this.overallpoint>=5){
    console.log(" Lop trung binh");
}else{
    console.log(" Lop yeu");
}

