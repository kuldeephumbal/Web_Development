class Student {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        }
    display()  {
        console.log(`My name is ${this.name}.My age is ${this.age} and my gender is ${this.gender}`);
    }
}

module.exports.Student = Student;