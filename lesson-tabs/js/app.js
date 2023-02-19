const tabs = document.querySelectorAll('.tab_btn')
const all_content = document.querySelectorAll('.content')

function removeActiveClass(){
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}

function removeActiveClassFromContent(){
    all_content.forEach(tab1 => {
        tab1.classList.remove('active')
    })
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        
        removeActiveClass()
        tab.classList.add("active")
        let line = document.querySelector('.line')
        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px';


        removeActiveClassFromContent()
        all_content[index].classList.add('active')
    })
})