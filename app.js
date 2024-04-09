var student = new Map();
student.set("John", 10);
student.set("Mary", 20);
student.set("Peter", 30);
student.forEach(function (name, id) {
    console.log("Student ID: ".concat(name, ", Name: ").concat(id));
});
