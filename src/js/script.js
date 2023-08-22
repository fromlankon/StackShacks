let hamburgerMenu = document.querySelector('.hamburgerMenu');
let bars = document.querySelector('.bars');
let close = document.querySelector('.close');

bars.addEventListener('click', function(){
    hamburgerMenu.style.right = "0%";
})

close.addEventListener('click', function(){
    hamburgerMenu.style.right = "-60%";
})