//main navigation info modal

const infomdl = document.getElementById("info-modal");
const openifomdl = document.getElementById("open-btn");
const closemdl = document.getElementById("close-btn");

//modal with info about the quiz opens on click ? icon 

openifomdl.addEventListener("click", function () {
   infomdl.style.display = "block";
});

//close modal when x close button is clicked

closemdl.addEventListener("click", function () {
   infomdl.style.display = "none";
});

//close modal when clicked anywhere on window

window.onclick = function (event) {
   if (event.target == infomdl) {
      infomdl.style.display = "none";
   }
};