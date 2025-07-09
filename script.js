// Slides
let photos = document.querySelector('.photos');
let eventPhoto = document.querySelectorAll('.event-photo');
let dots = document.querySelectorAll('.dots li');
let previous = document.getElementById('previous');
let next = document.getElementById('next');


let active = 0;
let lengthItems = eventPhoto.length - 1;

next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
};

previous.onclick = function(){
    if (active - 1 < 0){
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
};

let refreshSlides = setInterval(() => {next.click();}, 4000);

function reloadSlider(){
    let checkLeft = eventPhoto[active].offsetLeft;
    photos.style.left = -checkLeft + "px";

    let activeDot = document.querySelector('.dots li.active');
    activeDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlides);
    refreshSlides = setInterval(() => {next.click();}, 4000);
}

dots.forEach ((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})


// Darkmode
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === 'active') enableDarkMode();

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== 'active'){
        enableDarkMode()
    }else{
        disableDarkmode()
    }
});