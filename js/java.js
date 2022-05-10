// IMAGE SLIDER START
// select buttons and sliders
const sliders = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

// Iterate all class slides
sliders.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// counter that tells if you press nextBtn or prevBtn
counter = 0;

nextBtn.addEventListener("click", function () {
  console.log("painettu");
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  console.log("Joo");
  counter--;
  carousel();
});

function carousel() {
  if (counter === sliders.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = sliders.length - 1;
  }

  sliders.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// Image slider ends
///////////////
//////////////
////////////
/////////

// Kysymys start

const btns = document.querySelectorAll('.kysymys-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
        console.log("painettu");

        const kysymys = e.currentTarget.parentElement.parentElement;
        console.log(kysymys)
        kysymys.classList.toggle('show-text');

    })
})


// modals 

const 