var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//music player //

document.querySelector('.playpause').addEventListener('click', playpause);
 
function playpause() {
    if(document.querySelector('.playpause').innerHTML == '<i class="fas fa-play"></i>') {
        document.querySelector('#musicsrc').play();
        document.querySelector('.playpause').innerHTML = '<i class="fas fa-pause"></i>';
      } 
    else {
        document.querySelector('#musicsrc').pause();
        document.querySelector('.playpause').innerHTML = '<i class="fas fa-play"></i>';
      }
 
  }