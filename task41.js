var student={
    "name":"rohit",
    "class":"3rd",
    "roll_no":5
}

console.log("before deleting");
console.log(student);

delete student["roll_no"];

console.log("after deleting");
console.log(student);