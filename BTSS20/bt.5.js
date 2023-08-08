let textarea = document.querySelector('textarea');
let buttons = document.querySelectorAll('.btn')
buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        textarea.value += btn.innerHTML
    })
})