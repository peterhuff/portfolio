const db = firebase.firestore();

const contactForm = document.querySelector(".contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
// const subject = document.getElementById("subject");
const message = document.getElementById("message");
const contactModal = document.querySelector(".contact-modal");
const closeButton = document.querySelector(".contact-modal button");

document.addEventListener('invalid', (function(){
    return function(e) {
        // prevent default message
        e.preventDefault();
        
        // show "required" text
        const allRequireds = document.getElementsByClassName("required");
        for (let i = 0; i < 2; i++) {
            allRequireds[i].style.display = "inline";
        }
    };
})(), true);

closeButton.addEventListener("click", () => {
    contactModal.close();
    document.body.style.position = '';
    document.body.style.overflow = '';
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("test").add({
        name: fullName.value,
        email: email.value,
        message: message.value,
        timeStamp: Date.now()
    })
    .then(() => {
        contactModal.showModal();
        document.body.style.height = '100%';
        document.body.style.overflow = "hidden";    
    })
    .catch((error) => {
        console.error("Error sending message: ", error);
    });
});

 




