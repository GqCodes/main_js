// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  !re.test(name.value) ? name.classList.add("is-invalid") : name.classList.remove("is-invalid");
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  !re.test(zip.value) ? zip.classList.add("is-invalid") : zip.classList.remove("is-invalid");
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  !re.test(email.value) ? email.classList.add("is-invalid") : email.classList.remove("is-invalid");
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  !re.test(phone.value) ? phone.classList.add("is-invalid") : phone.classList.remove("is-invalid");
}
