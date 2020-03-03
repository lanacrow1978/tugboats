// mobile menu

/*$(document).ready(function(){
 

$( '.hamburger' ).on("click", function(){
    $('#mySidenav').width("100%");
});


    // close when clicking on a link
$( '.menu-link' ).on("click", function(){
  $('#mySidenav').width("0");
});
    // close when clicking on the close btn
$( '.closebtn' ).on("click", function(){
  $('#mySidenav').width("0");
});
   

});*/

// mobile menu

const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 


// slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

