
document.querySelector('#reg').addEventListener('click', () => {
    document.querySelectorAll('.unshow').forEach(el => {
        el.style.display = 'inline';
    })
    document.querySelectorAll('.show').forEach(el => {
        el.style.display = 'none';
    })
})


document.querySelector('#log').addEventListener('click', () => {
    document.querySelectorAll('.unshow').forEach(el => {
        el.style.display = 'none';
    })
    document.querySelectorAll('.show').forEach(el => {
        el.style.display = 'inline';
    })
})