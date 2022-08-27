function checkPassword() {
    if (document.getElementById('PASSWORD').value == Avd10) {
        document.getElementById('HIDDEN-CONTAINER').classList.remove("hidden");
        document.getElementById('FORM-POPUP').style.visibility= "hidden"
        document.getElementById('VIP-BTN').style.visibility= "hidden"
    } else {
        document.getElementById('PASSWORD').value= ""; // RESETTING THE PASSWORD AFTER FAIL
        alert('Invalid Password!!'); password.setSelectionRange(0, password.value.length);
    }
}
function openForm() {
    document.getElementById('FORM-POPUP').style.visibility= "visible";
}
function closeForm() {
    document.getElementById('FORM-POPUP').style.visibility= "hidden";
}
const flipCard = document.querySelector(".container");
flipCard.addEventListener("click", function() {
    flipCard.classList.toggle("is-flipped");
});
const flipCard2 = document.querySelector(".container-2");
flipCard2.addEventListener("click", function() {
    flipCard2.classList.toggle("is-flipped");
});