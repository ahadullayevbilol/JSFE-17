let inp = document.querySelector('.taskInput')
let todo = document.querySelector('.todo-list')
let btn = document.querySelector('.addTask')



btn.addEventListener('click', () => {
    if (inp.value !== '') {
        inp.style.border = '0px solid black'
        todo.innerHTML += `
        <li>
        <div class="item">
        <input type="checkbox">
        <span>${inp.value}</span>
        </div>
        <div class="cross">✕</div>
        </li>
        `
    } else {
        inp.style.border = '1px solid red'
    }

    let cross = document.querySelectorAll('.cross')
    cross.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
        })
    })
    inp.focus()
    inp.value = ''
})