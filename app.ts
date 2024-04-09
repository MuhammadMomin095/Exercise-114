const student = new Map<string, number>();

student.set("John", 10);
student.set("Mary", 20);
student.set("Peter", 30);

student.forEach((name, id) => {
    console.log(`Student ID: ${name}, Name: ${id}`);
})