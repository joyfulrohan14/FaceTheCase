/**
* PHP Email Form Validation - v3.1
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();
      let thisForm = this;
      thisForm.querySelector('.sent-message').classList.add('d-block');


    });
  });


})();
