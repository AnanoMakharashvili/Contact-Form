const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");
const submitButton = document.getElementById("button");
const messageSent = document.getElementById("message-sent");
const errorFirst = document.getElementById("error-message-first");
const errorLast = document.getElementById("error-message-last");
const errorEmail = document.getElementById("error-message");
const errorInputMessage = document.getElementById("error-message-input");
const errorCheckbox = document.getElementById("error-message-checkbox");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
  let isValid = true;
  if (firstNameInput.value.trim() === "") {
    errorFirst.style.display = "block";
    firstNameInput.style.border = "1px solid red";
    isValid = false;
  } else {
    errorFirst.style.display = "none";
    firstNameInput.style.border = "";
  }

  if (lastNameInput.value.trim() === "") {
    errorLast.style.display = "block";
    lastNameInput.style.border = "1px solid red";
    isValid = false;
  } else {
    errorLast.style.display = "none";
    lastNameInput.style.border = "";
  }

  if (!validateEmail(emailInput.value)) {
    errorEmail.style.display = "block";
    emailInput.style.border = "1px solid red";
    isValid = false;
  } else {
    errorEmail.style.display = "none";
    emailInput.style.border = "";
  }

  if (messageInput.value.trim() === "") {
    errorInputMessage.style.display = "block";
    messageInput.style.border = "1px solid red";
    isValid = false;
  } else {
    errorInputMessage.style.display = "none";
    messageInput.style.border = "";
  }

  if (!consentCheckbox.checked) {
    errorCheckbox.style.display = "block";
    isValid = false;
  } else {
    errorCheckbox.style.display = "none";
  }

  return isValid;
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const formIsValid = validateForm();

  if (formIsValid) {
    messageSent.style.display = "block";
  } else {
    messageSent.style.display = "none";
  }
});
