

(() => {

  console.log('hello from JS!');
  //find the elements in the docuemnt
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1');
    /*svgImg = document.querySelector("#badge");*/
   allSVGs = document.querySelectorAll(".svg");


    //this function should change the header text
  function changeText() {
    myHeading.textContent = "Crash Collide Into Space";
  }

  //this function should log the ID for each SVG to the console
  function logSVG() {
    console.log(this.id);
  }

  /* things a user can do to make stuff happen on page */
  toggleButton.addEventListener("click", changeText);

  /*svgImg.addEventListener("click", logSVG);
  svgImg2.addEventListener("click", logSVG);*/

  allSVGs.forEach(item => item.addEventListener("click", logSVG));

  //document.querySelector('h1').textContent = "What is up? I am script!";
})();
