// IMAGE SLIDER START
// select buttons and sliders
const sliders = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

// Iterate all class slides
sliders.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// counter 
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


// main function
function carousel() {

  // Jos counter on yhtä iso kuin sliderin määrä niin counter palautuu takaisin nollaan, eli palaa kuvan alkuun
  if (counter === sliders.length) {
    counter = 0;
  }
  // jos counter on pienempi kuin nolla (Jos painetaan prev koko ajan) niin se heittää vikaan kuvaan
  if (counter < 0) {
    counter = sliders.length - 1;
  }

  // Heittää translateX oikean arvon 
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

const modal1 = document.querySelector('.peruslataus');
const modal2 = document.querySelector('.hidaslataus');
const modal3 = document.querySelector('.teholataus');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelectorAll('.close-modal')
const btnOpen = document.querySelectorAll('.show-modal')





// Open modals
btnOpen.forEach(function (btn) {
  
  btn.addEventListener('click', function(e) {
    const kysymys = e.currentTarget.parentElement;
    
    if (kysymys.classList.contains('modal1')) {
      modal1.classList.remove('hidden');
      overlay.classList.remove('hidden');
    } else if (kysymys.classList.contains('modal2')) {
      modal2.classList.remove('hidden');
      overlay.classList.remove('hidden');

    } else if (kysymys.classList.contains('modal3')) {
      modal3.classList.remove('hidden')
      overlay.classList.remove('hidden');
    }
  })
})

// hide modals
btnClose.forEach(function(btn) {
  btn.addEventListener('click', function () {

    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');


  })
})
