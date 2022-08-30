const resetSignupFields = () => {
  document.getElementById("signup-first-name").value = "";
  document.getElementById("signup-last-name").value = "";
  document.getElementById("signup-phone").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-phone").value="";
  document.getElementById("selectBatch").value="none";
  document.getElementById("selectModule").value = "none";
  document.getElementById("tnC").checked = false;

  document.getElementById("first-name-valid").style.display = "none";
  document.getElementById("last-name-valid").style.display = "none";
  document.getElementById("email-valid").style.display = "none";
  document.getElementById("phone-valid").style.display = "none";
  document.getElementById("batch-valid").style.display = "none";
  document.getElementById("module-valid").style.display = "none";
};

const signup = () => {
  let firstName = document.getElementById("signup-first-name").value;
  let lastName = document.getElementById("signup-last-name").value;
  let phone = document.getElementById("signup-phone").value;
  let email = document.getElementById("signup-email").value;
  let selectBatch = document.getElementById("selectBatch").value;
  let selectModule = document.getElementById("selectModule").value;
  let tnC = document.getElementById("tnC").checked;

  let signupSuccessAlert = document.getElementById("signup-alert-success");
  let signupFailureAlert = document.getElementById("signup-alert-failure");

  let error = false;

  if (!firstName) {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
    error = true;
  } else if (firstName.length < 3) {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
    error = true;
  } else {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
    error = false;
  }

  if (!lastName) {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
    error = true;
  } else if (lastName.length < 3) {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
    error = true;
  } else {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
    error = false;
  }

  if (
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length - 3 &&
    email.indexOf("@") !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error = true;
  }

  if (phone.length < 10 && phone.value != Number) {
    document.getElementById("phone-invalid").style.display = "block";
    document.getElementById("phone-valid").style.display = "none";
    error = true;
  } else if (phone.length > 10) {
    document.getElementById("phone-invalid").style.display = "block";
    document.getElementById("phone-valid").style.display = "none";
    error = true;
  } else {
    document.getElementById("phone-invalid").style.display = "none";
    document.getElementById("phone-valid").style.display = "block";
    error = false;
  }

  if (selectBatch !== "none") {
    document.getElementById("batch-valid").style.display = "block";
    document.getElementById("batch-invalid").style.display = "none";
  } else {
    document.getElementById("batch-valid").style.display = "none";
    document.getElementById("batch-invalid").style.display = "block";
    error = true;
  }

  if (selectModule !== "none") {
    document.getElementById("module-valid").style.display = "block";
    document.getElementById("module-invalid").style.display = "none";
  } else {
    document.getElementById("module-valid").style.display = "none";
    document.getElementById("module-invalid").style.display = "block";
    error = true;
  }

  if (tnC) {
    document.getElementById("tnC-invalid").style.display = "none";
  } else {
    document.getElementById("tnC-invalid").style.display = "block";
    error = true;
  }

  if (!error) {
    signupSuccessAlert.style.display = "block";
    signupFailureAlert.style.display = "none";

    alert("Your details have been saved successfully!");
    resetSignupFields();
  }
  else{
    signupFailureAlert.style.display="block";
    signupSuccessAlert.style.display = "none";

  }
};
