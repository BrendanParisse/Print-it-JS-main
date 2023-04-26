const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banniereimg = document.querySelector('.banner-img')
const banniereTag = document.querySelector('#banner p')
const arrowR = document.querySelector('.arrow_right')
const arrowL = document.querySelector('.arrow_left')
const containerDots = document.querySelector('.dots');
let i = 0;

console.log(slides.length)

for (let i = 0; i <= slides.length - 1; i++) {
	const Dot = document.createElement('a');
	containerDots.appendChild(Dot);
	Dot.classList.add('dot')
	Dot.setAttribute('id', i)
	if (i === 0) {
		Dot.classList.add('dot_selected')
	}
}

arrowR.addEventListener("click", () => {
	let Dot = document.getElementById(i)
	console.log(Dot)
	Dot.classList.remove('dot_selected')
	i++;
	if (i >= slides.length) {
		i = 0;
	}
	let DotNext = document.getElementById(i)
	DotNext.classList.add('dot_selected')
	banniereimg.src = "./assets/images/slideshow/" + slides[i].image;
	banniereTag.innerHTML = slides[i].tagLine;
	console.log(i)
});

arrowL.addEventListener("click", () => {
	let Dot = document.getElementById(i)
	console.log(Dot)
	Dot.classList.remove('dot_selected')
	i--;
	if (i < 0) {
		i = slides.length - 1;
	}
	let DotNext = document.getElementById(i)
	DotNext.classList.add('dot_selected')
	banniereimg.src = "./assets/images/slideshow/" + slides[i].image;
	banniereTag.innerHTML = slides[i].tagLine;
	console.log(i)
});