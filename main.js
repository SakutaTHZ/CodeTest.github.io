document.querySelector('.closeButton').addEventListener('click',()=>{
    document.querySelector('.modalCard').classList.remove('modalShow')
})

const items = document.querySelectorAll('.itemBox')

items.forEach(element => {
    element.addEventListener('click',()=>{
        document.querySelector('.modalCard').classList.add('modalShow')
    })
});
