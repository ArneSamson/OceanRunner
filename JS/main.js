document.querySelector("#QAform").addEventListener("submit", validateForm);
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const question = document.querySelector("#question");

function validateForm(e){
    e.preventDefault();
    window.scrollTo(top);
    
    document.querySelector("#feedback").innerHTML = "";

    if (nameInput.value == "") {
        document.querySelector("#feedback").innerHTML += " <span>name should not be empty </span><br>";
      }

    if (emailInput.value == "") {
    document.querySelector("#feedback").innerHTML += "<span>email should not be empty</span><br>";
    }

    if (question.value.length <= 10) {
        document.querySelector("#feedback").innerHTML += "<span>question should be at least 10 characters</span><br>";
      }
}