 AOS.init();


 /**Navigation-menus JS */
 const toggleButton = document.getElementsByClassName('toggle-button')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links')[0];
 toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active')
 });

 /** Pop-up modal JS*/
 var modal3 = document.querySelector(".modal3");
 var modal4 = document.querySelector(".modal4");
 var button3 = document.querySelector(".button3");
 var button4 = document.querySelector(".button4");
 var closeButton3 = document.querySelector(".close-button3");
 var closeButton4 = document.querySelector(".close-button4");

 function toggleModal1() {
     modal3.classList.toggle("show-modal");
 };

 function toggleModal2() {
     modal4.classList.toggle("show-modal");
 };

 function windowOnClick(event) {
     if (event.target === modal3) {
         toggleModal1();
     }
     if (event.target === modal4) {
         toggleModal2();
     }
 }

 if (button3) {
     button3.addEventListener("click", toggleModal1);
 }
 if (button4) {
     button4.addEventListener("click", toggleModal2);
 }
 if (closeButton3) {
     closeButton3.addEventListener("click", toggleModal1);
 }
 if (closeButton4) {
     closeButton4.addEventListener("click", toggleModal2);
 }
 window.addEventListener("click", windowOnClick);