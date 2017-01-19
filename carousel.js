///KIRI KANAN
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gbr");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//============================PLAY

var otomatis = false;
var waktu;
function jalan() {
  var elem = document.getElementById("play");
  if (elem.value == 'Stop') {
    jalanin(false);
    elem.value = 'Play';
  } else if (elem.value == 'Play') {
    elem.value = 'Stop';
    jalanin(true);

  }
}


function jalanin(play_clicked) {
  if (play_clicked===true) {
    carousel();
    function carousel() {
      var i;
      var x = document.getElementsByClassName("gbr");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1
      }
      x[slideIndex - 1].style.display = "block";
      waktu=setTimeout(carousel, 1000);

    }

  } else{
    window.clearInterval(waktu);
  }

}