
// Vanilla JS

function addTwoNumbers(a, b) {
    return a + b
}

let sum = addTwoNumbers(3, 5)
console.log(sum);

// Arrow functions with parameters

const addTwoNumbers2 = (a, b) => {
    return a + b
}

let sum2 = addTwoNumbers2(3, 5)
console.log(sum2);

// Single line arrow functions with parameters

const addTwoNumbers3 = (a, b) => a + b;

let sum3 = addTwoNumbers3(3, 7);
console.log(sum3);

// Implicit returns

const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('Hello');
sayHello();

// Returning multiple lines

const returnMultipleLines = () => (
    `<p> 
    This is a multiline string.
    </p>`
)

console.log(returnMultipleLines());