const db = firebase.firestore();

const contactForm = document.querySelector(".contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const contactModal = document.querySelector(".contact-modal");
const closeButton = document.querySelector(".contact-modal button");

// Invalid input fields
// No name
fullName.addEventListener("invalid", (e) => {
    // prevent default message
    e.preventDefault();

    // show "invalid" message
    const required = document.getElementById("name-required");
    required.style.display = "inline";
})

// Invalid Email
email.addEventListener("invalid", (e) => {
    // prevent default message
    e.preventDefault();

    // show "invalid" message
    const required = document.getElementById("email-invalid");
    required.style.display = "inline";
})

// No message
message.addEventListener("invalid", (e) => {
    // prevent default message
    e.preventDefault();

    // show "invalid" message
    const required = document.getElementById("message-required");
    required.style.display = "inline";
})


// Close contact modal
closeButton.addEventListener("click", () => {
    // close modal
    contactModal.close();

    // restore document behavior
    document.body.style.position = '';
    document.body.style.overflow = '';
});


// Contact form submitted successfully
function contactSuccess() {
    // show "message sent" modal
    contactModal.showModal(); 

    // lock rest of document
    document.body.style.height = '100%'; 
    document.body.style.overflow = "hidden";    

    // clear contact form
    contactForm.reset(); 

    // hide "invalid" messages
    const allInvalids = document.getElementsByClassName("invalid");
    for (let i = 0; i < allInvalids.length; i++) {
        allInvalids[i].style.display = "none"; 
    }
}


// Submit contact form
contactForm.addEventListener("submit", (e) => {
    // prevent reload
    e.preventDefault(); 

    // add message document to database
    db.collection("messages").add({ 
        name: fullName.value,
        email: email.value,
        message: message.value,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp() // save server timestamp
    })
    .then(() => {
        // clear form and show modal
        contactSuccess();
    })
    .catch((error) => {
        // couldn't submit to database, log error message
        console.error("Error sending message: ", error);
    });
});

 




