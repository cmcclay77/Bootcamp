// WRITE YOUR CODE HERE
var studentNames = ['Kris', 'Chris', 'Sammy', 'Sasha'];
console.log(studentNames);

if (studentNames[0]) {
    console.log(studentNames[0] + ' is in class');
}

console.log(studentNames[0]);
console.log(studentNames[1]);
console.log('Welcome to the class ' + studentNames[2]);

studentNames [0] = 'Bob';
console.log(studentNames);

if (studentNames[0] === 'Bob') {
     console.log(studentNames[0] + ' is in class');
}