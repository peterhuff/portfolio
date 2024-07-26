const db = firebase.firestore();

const contactForm = document.querySelector(".contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
// const subject = document.getElementById("subject");
const message = document.getElementById("message");
const contactModal = document.querySelector(".contact-modal");
const closeButton = document.querySelector(".contact-modal button");

// document.addEventListener('invalid', (function(){
//     return function(e) {
//         // prevent default message
//         e.preventDefault();
        
//         // show "required" text
//         const allRequireds = document.getElementsByClassName("required");
//         for (let i = 0; i < 2; i++) {
//             allRequireds[i].style.display = "inline";
//         }
//     };
// })(), true);

fullName.addEventListener("invalid", (e) => {
    e.preventDefault();
    const required = document.getElementById("name-required");
    required.style.display = "inline";
})

email.addEventListener("invalid", (e) => {
    e.preventDefault();
    const required = document.getElementById("email-invalid");
    required.style.display = "inline";
})

message.addEventListener("invalid", (e) => {
    e.preventDefault();
    const required = document.getElementById("message-required");
    required.style.display = "inline";
})

closeButton.addEventListener("click", () => {
    contactModal.close();
    document.body.style.position = '';
    document.body.style.overflow = '';
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("messages").add({
        name: fullName.value,
        email: email.value,
        message: message.value,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        contactModal.showModal();
        contactForm.reset();
        const allInvalids = document.getElementsByClassName("invalid");
        for (let i = 0; i < allInvalids.length; i++) {
            allInvalids[i].style.display = "none";
        }
        document.body.style.height = '100%';
        document.body.style.overflow = "hidden";    
    })
    .catch((error) => {
        console.error("Error sending message: ", error);
    });
});

 




