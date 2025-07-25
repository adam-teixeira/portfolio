// Slides
let photos = document.querySelector('.photos');
let eventPhoto = document.querySelectorAll('.event-photo');
let descriptions = document.querySelectorAll('.description');
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

function reloadSlider(){
    let checkLeft = eventPhoto[active].offsetLeft;
    photos.style.left = -checkLeft + "px";

    // Oculta todas as descrições
    descriptions.forEach(desc => {
    desc.style.display = "none";
});

    // Mostra a descrição correspondente à imagem atual
    descriptions[active].style.display = "block";


    let activeDot = document.querySelector('.dots li.active');
    activeDot.classList.remove('active');
    dots[active].classList.add('active');

   }

dots.forEach ((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// Ao carregar a página, garante que só a descrição ativa apareça
reloadSlider();



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