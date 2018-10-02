window.onload = function() {

// Sticky navigation bar
var nav = document.getElementsByClassName("navigation")
window.onscroll = function sticky() {
  if (window.pageYOffset > nav[0].offsetTop) {
    nav[0].classList.add("nav");
    document.getElementById("hello-image-head").style.top = "7.3rem";
    document.getElementById("intro-section").style.marginTop = "4.5rem";
  }
  else {
    nav[0].classList.remove("nav");
    document.getElementById("hello-image-head").style.top = "3rem";
    document.getElementById("intro-section").style.marginTop = "auto";
  }
}

console.log("Hi, come here often? :)");
}

//JQuery
$(document).ready(function () {
  var scrolltempo = 600;

  $("#intro-nav-button").click(function() {
    $('html, body').animate({
      scrollTop: $('#intro-section').offset().top
    }, scrolltempo);
  });

  $("#second-nav-button").click(function() {
    $('html, body').animate({
      scrollTop: $('#boid-section').offset().top
    }, scrolltempo);
  });

  $("#projects-nav-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-section").offset().top
    }, scrolltempo);
  });

});
