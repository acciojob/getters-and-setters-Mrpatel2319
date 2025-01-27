class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  // Method for Student to study
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method for Teacher to teach
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Example Usage
const person = new Person("John", 25);
console.log(person.name); // Output: John
person.age = 30;
console.log(person._age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
