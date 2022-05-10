var form = document.forms[0];
var fName = document.getElementById("first");
var lName = document.getElementById("last");
var email = document.getElementsByClassName("email")[0];
var reEnter = document.getElementById("re-enter");
var password = document.getElementById("newpass");
var spanFname = document.getElementById("spanFname");
var spanLname = document.getElementById("spanLname");
var spanEmail = document.getElementById("spanEmail");
var spanReEmail = document.getElementById("spanRe-Email");
var spanPassword = document.getElementById("spanPassword");

fName.addEventListener("blur", function () {
  if (fName.value == "" || fName.value.length <= 3) {
    spanFname.innerHTML =
      '<img src="./imgs/notvalid.png" width="20" height="20"/>';
    fName.focus();
    fName.select();
    fName.style.backgroundColor = "gray";
  } else {
    spanFname.innerHTML =
      '<img src="./imgs/valid.png" width="20" height="20"/>';
    fName.style.backgroundColor = "white";
  }
});
lName.addEventListener("blur", function () {
  if (lName.value == "" || lName.value.length <= 3) {
    spanLname.innerHTML =
      '<img src="./imgs/notvalid.png" width="20" height="20"/>';
    lName.focus();
    lName.select();
    lName.style.backgroundColor = "gray";
  } else {
    spanLname.innerHTML =
      '<img src="./imgs/valid.png" width="20" height="20"/>';
    lName.style.backgroundColor = "white";
  }
});
email.addEventListener("blur", function () {
  if (
    email.value == "" ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false
  ) {
    spanEmail.innerHTML =
      '<img src="./imgs/notvalid.png" width="20" height="20"/>';
    email.focus();
    email.select();
    email.style.backgroundColor = "gray";
  } else {
    spanEmail.innerHTML =
      '<img src="./imgs/valid.png" width="20" height="20"/>';
    email.style.backgroundColor = "white";
  }
});
reEnter.addEventListener("blur", function () {
  if (reEnter.value == "" || reEnter.value !== email.value) {
    spanReEmail.innerHTML =
      '<img src="./imgs/notvalid.png" width="20" height="20"/>';
    reEnter.style.backgroundColor = "gray";
  } else {
    spanReEmail.innerHTML =
      '<img src="./imgs/valid.png" width="20" height="20"/>';
    reEnter.style.backgroundColor = "white";
  }
});
password.addEventListener("blur", function () {
  if (password.value == "" || password.value.length < 4) {
    spanPassword.innerHTML =
      '<img src="./imgs/notvalid.png" width="20" height="20"/>';
    password.style.backgroundColor = "gray";
  } else {
    spanPassword.innerHTML =
      '<img src="./imgs/valid.png" width="20" height="20"/>';
    password.style.backgroundColor = "white";
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    fName.value == "" ||
    fName.value.length <= 3 ||
    lName.value == "" ||
    lName.value.length <= 3 ||
    email.value == "" ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) ==
      false ||
    reEnter.value == "" ||
    reEnter.value !== email.value ||
    password.value == "" ||
    password.value.length < 4
  ) {
    alert("Plz correct the validation errors first");
  } else {
    form.submit();
  }
});
