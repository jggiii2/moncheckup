/* GET BROWSER LANG */
var userLang = navigator.language || navigator.userLanguage;
// check if browser lang in the list
var langList = ['en', 'de', 'it', 'fr'];
if (userLang === undefined || userLang === null || userLang === '') userLang = 'en';
else {
    userLang = userLang.slice(0, 2).toLowerCase();
   if (!langList.includes(userLang)) userLang = 'en';
}

/* Validate MonCheckUp Form */
function validateMCUForm(e) {
    e.preventDefault();
    var fname = document.forms['mcuForm']['first_name'].value;

    // PERFORM CHECKS ON FIRST NAME ...
}
