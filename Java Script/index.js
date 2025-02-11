// const menu = [
//     { id: 1, name: 'Home', link: '/' },
//     { id: 2, name: 'About', link: '/about' },
//     { id: 3, name: 'Services', link: '/services' },
//     { id: 4, name: 'Contact', link: '/contact' }
// ];

// function displayMenu(menu) {
//     menu.forEach(item => {
//         console.log(`${item.id}. ${item.name} - ${item.link}`);
//     });
// }

// displayMenu(menu);


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log("Addition: " + add(10, 5));
console.log("Subtraction: " + subtract(10, 5));
console.log("Multiplication: " + multiply(10, 5));
console.log("Division: " + divide(10, 5));