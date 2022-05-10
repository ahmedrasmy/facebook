var form = document.forms[0];
var email = document.getElementsByClassName("email")[0];
var spanEmail = document.getElementById("spanEmail");
var password = document.getElementById("pass");
var spanPassword = document.getElementById("spanPassword");

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
    email.value == "" ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) ==
      false ||
    password.value == "" ||
    password.value.length < 4
  ) {
    alert("Plz correct the validation errors first");
  } else {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../json/JSONlogin.json");
    xhr.send();
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var result = JSON.parse(xhr.response);
        for (let i = 0; i < result.length; i++) {
          if (
            email.value == result[i].email &&
            password.value == result[i].password
          ) {
            form.submit();
          }
        }
        
      }
    });
  }
});
