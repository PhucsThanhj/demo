function openNav() {
    if (document.getElementById("mySidenav").style.width == "250px"){
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("navbar").style.backgroundColor ="white";
        document.body.style.backgroundColor = "white";
        document.getElementById("navbar").style.visibility ="visible";
        document.getElementById("overlay").style.display ="none";
        return;
    };
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("overlay").style.display ="block";
    document.getElementById("navbar").style.visibility ="hidden";
  }

const menuBtn = document.querySelector('.menu-btn');
const overlay = document.getElementById("overlay");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
overlay.addEventListener('click', () => {
    if(menuOpen == true) {
      menuBtn.classList.remove('open');
      menuOpen = false;
      document.getElementById("mySidenav").style.width = "0px";
      document.body.style.backgroundColor = "white";
      document.getElementById("navbar").style.visibility ="visible";
      document.getElementById("overlay").style.display ="none";
      return;
    }
  });


function myFunction(x) {
    if (!x.matches) { // If media query matches
      document.getElementById("mySidenav").style.width = "0";
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 600px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });



  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}






