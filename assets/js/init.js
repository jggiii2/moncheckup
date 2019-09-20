(function($) {
  $(function() {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
  }); // end of document ready
})(jQuery); // end of jQuery name space

/* BUILD COUNTDOWN CLOCK OBJECT */
var countdownclock1 = document.querySelector('.countdown');
var countdownclock2 = document.querySelector('.countdown2');

if (countdownclock1) {
  const efcc_countdown = new countdown({
    target: '.countdown',
    dayWord: ' days',
    hourWord: ' hours',
    minWord: ' mins',
    secWord: ' secs'
  });
}
if (countdownclock2) {
  const efcc_countdown2 = new countdown({
    target: '.countdown2',
    dayWord: ' days',
    hourWord: ' hours',
    minWord: ' mins',
    secWord: ' secs'
  });
}

/* MATERIALIZE SELECT INITIALIZATION */
// Add DOBs to health assessment card
function addDOBs() {
  // populate the birth year options
  d = new Date();
  curr_year = d.getFullYear() - 11;
  var dateOfBirth = document.querySelector('#birthyear');
  for (var i = 0; i < 100; i++) {
    var year = document.createElement('option');
    year.textContent = curr_year - i;
    dateOfBirth.appendChild(year);
  }
}
addDOBs();
// initilize select elements
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

/* MATERIALIZE MODAL INITIALIZATION */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

/* NAVBAR */
// Toggle logo image and text
const navbarLogoLink = document.querySelector('#navbar-logo-link');
const navbarLogoImage = document.querySelector('#navbar-logo-image');
const toggleNavLogoImage = function(){
  if(window.innerWidth > 740){
    navbarLogoImage.removeAttribute('hidden')
    navbarLogoLink.setAttribute('class', 'brand-logo logo white-text')
  } else {
    navbarLogoImage.setAttribute('hidden', true)
    navbarLogoLink.setAttribute('class', 'brand-logo logo white-text center')
  }
}
document.addEventListener('DOMContentLoaded', toggleNavLogoImage);
window.addEventListener('resize', toggleNavLogoImage);