let student = {
    firstName : "Bob",
    LastName : "Smith",
    iNumber : '112233444'
}


console.log(student.iNumber);

let students = [];

students.push(student);


//GOOD
for (var i = 0; i < links.length; i++){
    //Stuff
}

//BETTER
links.forEach(
    link => {

    }
);