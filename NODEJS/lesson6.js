var module1 = require("./module1");
var module2 = require("./module2");

module1.Person.talk("kuldeep");
module1.Person.walk("kuldeep");
module1.Person.move("kuldeep");

let s1 = new module2.Student("Kuldeep",21,"Male");
s1.display()

