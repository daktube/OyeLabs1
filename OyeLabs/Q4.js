const person = {
    id:2,
    gender: 'male'
};

const student = {
    name: 'rave',
    email: 'ravi11@yopmail.com'
};

let newObject = {
    ...person,
    ...student
};

console.log(newObject);