const db = firebase.firestore();

const contactForm = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

function getRandomInt() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(10);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}  

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("test").add({
        name: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    })
});




