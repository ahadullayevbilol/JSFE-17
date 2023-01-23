// 1-homework: Check age

let userName = prompt('Ismingizni kiriting')
let age = +prompt('Yoshingizni kiriting')

let userName1 = prompt('Ismingizni kiriting')
let age1 = +prompt('Yoshingizni kiriting')

let user1 = {
    name: userName,
    age: age,
}

let user2 = {
    name: userName1,
    age: age1
}

if (user1.age > user2.age) {
    alert(`${user1.name} ${user2.name} dan katta`)
} else if (user1.age < user2.age) {
    alert(`${user1.name} ${user2.name} dan kichkina`)
} else if (user1.age == user2.age) {
    alert(`${user1.name} va ${user2.name} ning yoshlari teng`)
} else {
    alert('Error')
}

// 2-homework: Calc

let firstNumber = +prompt('Birinchi sonni kiriting')
let operator = prompt('Matematik amalni kiriting (+ - * /)')
let secondNumber = +prompt('Ikkinchi sonni kiriting')

if (!isNaN(Number(firstNumber)) && !isNaN(Number(secondNumber))) {
    if (operator === '+') {
        alert(firstNumber + secondNumber);
    } else if (operator === '-') {
        alert(firstNumber - secondNumber);
    } else if (operator === '*') {
        alert(firstNumber * secondNumber);
    } else if (operator === '/') {
        alert(firstNumber / secondNumber);
    } else {
        alert("Matematik amalni to'g'ri kirting")
    }
} else {
    alert('Qaytadan urining')
}