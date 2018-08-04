window.onload = function() {

// Sticky navigation bar
var nav = document.getElementsByClassName("navigation")
window.onscroll = function sticky() {
  if (window.pageYOffset > nav[0].offsetTop) {
    nav[0].classList.add("nav");
  }
  else {
    nav[0].classList.remove("nav")
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

  $("#milestones-nav-button").click(function() {
    $('html, body').animate({
      scrollTop: $('#milestones-section').offset().top
    }, scrolltempo);
  });

  $("#projects-nav-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-section").offset().top
    }, scrolltempo);
  });

});
