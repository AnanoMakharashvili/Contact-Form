const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const generalSupport = document.querySelectorAll(".general-support");
const messageInput = document.getElementById("message");
const getCheckboxInput = document.getElementById("consent");
const submitButton = document.getElementById("button");
const messageSent = document.getElementById("message-sent");
const errorMessage = document.querySelectorAll("#error-message");
const errorCheckbox = document.getElementById("error-message-checkbox");
const errorQuery = document.getElementById("error-message-query");

let inputText = "";

errorMessage.forEach((error) => {
  error.style.display = "none";
});

submitButton.addEventListener("click", () => {
  inputText = emailInput.value;

  if (validateEmail(inputText)) {
    messageSent.style.display = "block";

    errorMessage.forEach((error) => {
      error.style.display = "none";
    });
    firstNameInput.style.border = "";
  } else {
    messageSent.style.display = "none";

    errorMessage.forEach((error) => {
      error.style.display = "block";
      errorCheckbox.style.display = "block";
      errorQuery.style.display = "block";
    });
    firstNameInput.style.border = "1px solid red";
    lastNameInput.style.border = "1px solid red";
    emailInput.style.border = "1px solid red";
    messageInput.style.border = "1px solid red";
  }
});

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
