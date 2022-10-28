let button = document.querySelector('nav span') 
let slide = document.querySelector('.sidebar')
button.addEventListener('click' ,slider)   
function slider() {
  slide.classList.toggle('active')
}                                