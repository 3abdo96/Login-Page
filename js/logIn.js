let emailLoginInput = document.getElementById("emailLoginInput");
let passwordLoginInput = document.getElementById("passwordLoginInput");
let loginBtn = document.getElementById("loginBtn");
let alertMassage = document.getElementById("alertMassage");

let users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}
function logIn() {
  if (checkInputsIsEmpty() == true) {
    getAlertMessage("All Inputs Required", "red");
  } else {
    if (checkEmailPassword() == true) {
      window.location.href = "home.html";
    } else {
      getAlertMessage("Email or Password Not Correct", "red");
    }
  }
}

function checkEmailPassword() {
  for (let index = 0; index < users.length; index++) {
    if (
      emailLoginInput.value == users[index].userEmail &&
      passwordLoginInput.value == users[index].userPass
    ) {
      localStorage.setItem("userName", users[index].userName);
      return true;
    }
  }
}

function getAlertMessage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}

function checkInputsIsEmpty() {
  if (emailLoginInput.value == "" || passwordLoginInput.value == "") {
    return true;
  } else return false;
}
loginBtn.addEventListener("click", logIn);
