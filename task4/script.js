const form = document.getElementById("registrationForm");
const fields = form.querySelectorAll(
    'input:not([type="radio"]):not([type="checkbox"]), select'
);

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const genderFeedback = document.getElementById("genderFeedback");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let allValid = true;
    successMessage.textContent = "";

    confirmPassword.setCustomValidity("");

    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    }

    fields.forEach(function(field) {
        field.classList.remove("is-valid", "is-invalid");

        if (field.checkValidity()) {
            field.classList.add("is-valid");
        } else {
            field.classList.add("is-invalid");
            allValid = false;
        }
    });

    const selectedGender = form.querySelector(
        'input[name="gender"]:checked'
    );

    if (selectedGender === null) {
        genderFeedback.classList.remove("d-none");
        allValid = false;
    } else {
        genderFeedback.classList.add("d-none");
    }

    if (allValid) {
        successMessage.textContent =
            "Registration form validated successfully!";
    }
});

form.addEventListener("reset", function() {
    fields.forEach(function(field) {
        field.classList.remove("is-valid", "is-invalid");
    });

    confirmPassword.setCustomValidity("");
    genderFeedback.classList.add("d-none");
    successMessage.textContent = "";
});