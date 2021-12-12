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

//contact form modal

//prevent submit by default and return a thank you message 

function getContactDetails(event) {
   event.preventDefault ();
   let contactName = document.getElementById("contactname");
   let email = document.getElementById("email");

   let inputContactName = contactName.value;
   let inputEmail = email.value;

   let message = `Thank you for your message, ${inputContactName}!</br>We'll get back to you at ${inputEmail} shortly!`

   document.getElementById("thank-you").innerHTML = message;
   //reset form inputs after message is printed
   document.getElementById("contact-modal").reset();
}

let sendForm = document.getElementById("contact-modal");
sendForm.addEventListener("submit", getContactDetails);