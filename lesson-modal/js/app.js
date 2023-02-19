let modalOpenBtn = document.querySelector('.modal-btn'),
    modalClose = document.querySelector('.modal-close'),
    modal = document.querySelector('.modal')


function closeModal() {
    modal.style.display = 'none'
    document.body.style.overflowY = ''
}
modalOpenBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflowY = 'hidden'
})

modalClose.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        closeModal()
    }
})  