const backDrop = document.querySelector('.backdrop');
const toggler = document.querySelector('.toggler');

console.log(backDrop.style.visibility);

backDrop.addEventListener('click', (e) => {
    e.preventDefault();
    toggler.checked = false;
})