// slides est un tableau
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//récup éléments du slider
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

//ref première slide = mémorise "la première slide est index = 0
let currentSlide = 0;

// écoute les clics sur les flèches puis suit les instructions entre les accolades
arrowLeft.addEventListener("click", function () {
  // Au clic gauche, passe à la position antérieure
  currentSlide = currentSlide - 1;
  // Si la position est inférieure à 0, revient à la dernière position du tableau
  // slides.length = 4 donc slides.length - 1 = 3
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // image slide qui corrspond à la position
  image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  // p qui correspond à la position
  tagLine.innerHTML = slides[currentSlide].tagLine;
  // dots : retire la classe dot_selected (point blanc)
  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  //Ajoute la classe dot_selected (point blanc) à la position actuelle
  dots[currentSlide].classList.add("dot_selected");

  console.log("Clic sur la flèche gauche");
});

arrowRight.addEventListener("click", function () {
  currentSlide = currentSlide + 1;

  // boucle pour revenir à la première slide si on dépasse le nombre de slides
  // si la position actuelle est égale à la longueur du tableau slides, alors on revient à la première position (0)
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }

  image.src = "./assets/images/slideshow/" + slides[currentSlide].image;

  tagLine.innerHTML = slides[currentSlide].tagLine;

  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[currentSlide].classList.add("dot_selected");
  console.log("Clic sur la flèche droite");
});
