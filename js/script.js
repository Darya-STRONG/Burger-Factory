"use strict";

document.addEventListener('click', documentClick);
function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.icon-menu')){
    document.documentElement.classList.toggle('menu-open');
  }
}

$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:false,
    autoplaySleed:1500,
    pauseOnHover:false,
    centerMode:true,
    variableWidth:true,
    initialSlide:2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });
})

let details = document.querySelectorAll('.details');
let card = document.querySelectorAll('.card__item');

for(let i=0; i < details.length; i++) {
  let thisDetails = details[i];
  let subMenu = details[i].nextElementSibling;
  details[i].addEventListener('click', function(){
    subMenu.classList.toggle('open');
    thisDetails.classList.toggle('active');
    if (thisDetails.innerHTML === "Details") {
      thisDetails.innerHTML = "Reduce";
    } else {
      thisDetails.innerHTML = "Details";
    }
  })
}




