(function($){
  $(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
  }); // end of document ready
})(jQuery); // end of jQuery name space

/* BUILD COUNTDOWN CLOCK OBJECT */
var countdownclock1 = document.querySelector('.countdown');
var countdownclock2 = document.querySelector('.countdown2');

if(countdownclock1){
    const efcc_countdown = new countdown({
        target: '.countdown',
        dayWord: ' days',
        hourWord: ' hours',
        minWord: ' mins',
        secWord: ' secs'
    });
}
if(countdownclock2){
    const efcc_countdown2 = new countdown({
        target: '.countdown2',
        dayWord: ' days',
        hourWord: ' hours',
        minWord: ' mins',
        secWord: ' secs'
    });
}