// Variables globales
let compteur = 0; // Compteur qui permet de connaître l'image sur laquelle on se trouve
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
    // On récupère le diaporama
    const diapo = document.querySelector(".diapo");
    // On récupère le data-speed
    speed = diapo.dataset.speed;
    transition = diapo.dataset.transition;

    elements = document.querySelector(".elements");

    // On clone la 1ère image
    let firstImage = elements.firstElementChild.cloneNode(true);

    // On injecte le clone à la fin du diapo
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);

    // On récupère la largeur d'une slide
    slideWidth = diapo.getBoundingClientRect().width;

    // On récupère les flèches
    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    // On gère le clic
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    // On automatise le défilement
    timer = setInterval(slideNext, speed);
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++;
    elements.style.transition = transition+"ms linear";

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on "rembobine" de façon cachée
    setTimeout(function(){
        if(compteur >= slides.length - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    }, transition);
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--;
    elements.style.transition = transition+"ms linear";

    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);
    }

    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
    
}

/**
*
*  Petites fonctions
*
*/

/* Affichage des paramètres musique et theme */
	function toggle(){
	var settings= document.querySelector(".settings")
	settings.classList.toggle("active")
	}


/* switcheur du paramètres musique */
	var bouton = document.querySelector("#micro");
	var micro = document.querySelector("#micro > i");
	bouton.addEventListener("click", () => {
	  if (micro.className === 'bx bx-microphone-off') {
	micro.classList.remove('bx-microphone-off');
	micro.classList.add('bx-microphone');
	musique.play();
	  } else {
	micro.classList.remove('bx-microphone');
	micro.classList.add('bx-microphone-off');
	musique.pause();
	  }
	});

/* switcheur du paramètres theme */
	var bouton = document.querySelector("#theme");
	var theme = document.querySelector("#theme > i");
	bouton.addEventListener("click", () => {
	  if (theme.className === 'bx bx-toggle-right') {
	theme.classList.remove('bx-toggle-right');
	theme.classList.add('bx-toggle-left');
	document.getElementById('linkStyle').href ="styleInverse.css";
	  } else {
	theme.classList.remove('bx-toggle-left');
	theme.classList.add('bx-toggle-right');
	document.getElementById('linkStyle').href ="styletest.css";
	  }
	});
	
	
/* déploiment de la barre de navigation au click sur l'icon burger*/
	let sidebar = document.querySelector(".sidebar");
	let closeBtn = document.querySelector("#btn");
	let searchBtn = document.querySelector(".bx-search");

	closeBtn.addEventListener("click", ()=>{
	  sidebar.classList.toggle("open");
	  menuBtnChange();
	});

	searchBtn.addEventListener("click", ()=>{
	  sidebar.classList.toggle("open");
	  menuBtnChange();
	});

/* changement de l'icon burger au déploiment de la barre dde navigation */
	function menuBtnChange() {
	 if(sidebar.classList.contains("open")){
	   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
	 }else {
	   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
	 }
	}