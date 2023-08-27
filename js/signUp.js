let userNameInput = document.getElementById("userNameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

let alertMassage = document.getElementById("alertMassage");

let signUpBtn = document.getElementById("signUpBtn");

let users;

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [];
}
function signUp() {
  let data = {
    userName: userNameInput.value,
    userEmail: emailInput.value,
    userPass: passwordInput.value,
  };

  if (checkInputsIsEmpty() == true) {
    getAlertMessage("All Inputs Required", "red");
  } else {
    if (checkEmailExist() == true) {
      getAlertMessage("This Email Already Exists", "red");
    } else {
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      getAlertMessage("Success", "green");
      clearForm();
    }
  }
}

function getAlertMessage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}

function clearForm() {
  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function checkInputsIsEmpty() {
  if (
    userNameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    return true;
  } else return false;
}

function checkEmailExist() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].userEmail == emailInput.value) {
      return true;
    }
  }
}
signUpBtn.addEventListener("click", signUp);
