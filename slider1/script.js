let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let slides = document.querySelectorAll(".slide");
let sliders = [];


for (let i = 0; i < slides.length; ++i) {
  sliders[i] = slides[i].querySelector('img');
  slides[i].remove();
}


let step = 0, offset = 0;

function drow() {
  let slide = document.createElement("div");
  slide.classList.add("slide");
  slide.appendChild(sliders[step]);
  slide.style.left = offset * viewport + "px";
  document.querySelector(".slider").appendChild(slide);

  if (step + 1 == slides.length) {
    step = 0;
  } else step++;

  offset = 1
};


drow(); drow();



function left() {
  btnNext.removeEventListener('click', left);
  let slides2 = document.querySelectorAll(".slide");
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * viewport - viewport + "px";
    offset2++;
  }

  setTimeout(() => {
    slides2[0].remove()
    drow()
    btnNext.addEventListener("click", left)
  }, 500)
};


btnNext.addEventListener("click", left)