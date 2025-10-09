//Darkmode
const themeSwitch = document.getElementById('theme-switch');
const root = document.documentElement; // <html>
let lightmode = localStorage.getItem('lightmode');

const enableLightMode = () => {
  root.classList.add('lightmode');
  localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
  root.classList.remove('lightmode');
  localStorage.removeItem('lightmode');
};

// aplica estado salvo ao carregar
if (lightmode === 'active') enableLightMode();

// toggle no clique
if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    lightmode = localStorage.getItem('lightmode');
    if (lightmode !== 'active') {
      enableLightMode();
    } else {
      disableLightmode();
    }
  });
}



// // Slides
// let photos = document.querySelector('.photos');
// let eventPhoto = document.querySelectorAll('.event-photo');
// let descriptions = document.querySelectorAll('.description');
// let dots = document.querySelectorAll('.dots li');
// let previous = document.getElementById('previous');
// let next = document.getElementById('next');


// let active = 0;
// let lengthItems = eventPhoto.length - 1;

// next.onclick = function() {
//     if (active + 1 > lengthItems) {
//         active = 0;
//     } else {
//         active = active + 1;
//     }
//     reloadSlider();
// };

// previous.onclick = function(){
//     if (active - 1 < 0){
//         active = lengthItems;
//     } else {
//         active = active - 1;
//     }
//     reloadSlider();
// };

// function reloadSlider(){
//     let checkLeft = eventPhoto[active].offsetLeft;
//     photos.style.left = -checkLeft + "px";

//     // Oculta todas as descrições
//     descriptions.forEach(desc => {
//     desc.style.display = "none";
// });

//     // Mostra a descrição correspondente à imagem atual
//     descriptions[active].style.display = "block";


//     let activeDot = document.querySelector('.dots li.active');
//     activeDot.classList.remove('active');
//     dots[active].classList.add('active');

//    }

// dots.forEach ((li, key) => {
//     li.addEventListener('click', function(){
//         active = key;
//         reloadSlider();
//     })
// })

// // Ao carregar a página, garante que só a descrição ativa apareça
// reloadSlider();


// window.onload = () => {
//   const hash = window.location.hash.substring(1); // pega o que vem depois de #
//   const artigos = document.querySelectorAll("article");

//   // Esconde todos os artigos
//   artigos.forEach(artigo => {
//     artigo.style.display = "none";
//   });

//   // Mostra só o que tem o id do hash
//   if (hash) {
//     const escolhido = document.getElementById(hash);
//     if (escolhido) {
//       escolhido.style.display = "block";
//     }
//   }

//   // Garante que o footer sempre aparece
//   const footer = document.querySelector("footer");
//   if (footer) footer.style.display = "block";
// };


//menu desaparecendo
let lastScrollTop = 0; // Posição anterior da rolagem
const menu = document.getElementById("menu");

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Rolando pra baixo e já passou do topo
    menu.style.top = "-120px"; // Move o menu pra fora da tela
  } else {
    // Rolando pra cima
    menu.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
}, false);

//scroll
const sections = document.querySelectorAll('section');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - revealPoint) {
      // Evita reaplicar delays toda hora
      if (!section.classList.contains('revealed')) {
        section.classList.add('revealed');

        // Aplica o delay leve nos filhos diretos
        const children = section.querySelectorAll(':scope > *');
        children.forEach((child, index) => {
          child.style.transitionDelay = `${index * 150}ms`;
        });
      }
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// Cria o modal
const modal = document.createElement('div');
modal.classList.add('image-modal');
const modalImg = document.createElement('img');
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Seleciona todas as imagens clicáveis
document.querySelectorAll('.imagem img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('active');
  });
});

// Fecha o modal clicando fora da imagem ou apertando ESC
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('active');
});
