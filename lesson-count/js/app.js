let inc = document.querySelector('.inc'),
    dec = document.querySelector('.dec'),
    res = document.querySelector('.res'),
    rnd = document.querySelector('.rnd'),
    zero = document.querySelector('.zero')

let count = 0
zero.innerText = count

function increment() {
    count++
    zero.innerText = count
    if (count == 50) {
        inc.removeEventListener('click', increment)
    }
}

inc.addEventListener('click', increment)

function decrement() {
    count--
    zero.innerText = count
    if (count == -50) {
        dec.removeEventListener('click', decrement)
    }
}

dec.addEventListener('click', decrement)

res.addEventListener('click', () => {
    count = 0
    zero.innerText = count
})

rnd.addEventListener('click', () => {
    count = Math.floor(Math.random() * (50 - -50 + 1)) + -50;
    zero.innerText = count
})