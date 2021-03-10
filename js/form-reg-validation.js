document.getElementById("reg-button").onclick = function() {
    formValidation()
};

function formValidation() {
    var fullname = document.getElementById("reg-fullname").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;
    var cpassword = document.getElementById("reg-confirm-password").value;

    fullnameChecker(fullname);
    emailChecker(email);
    passwordChecker(password);
    confirmPasswordChecker(password, cpassword);

}

function fullnameChecker(fullname) {
    var fullnameHelp = document.getElementById("fullnameHelp");
    if (fullname == "") {
        fullnameHelp.innerHTML = "Tidak boleh kosong!"
        fullnameHelp.style.color = "red";
        return false;
    } else {
        fullnameHelp.innerHTML = "Sesuai!"
        fullnameHelp.style.color = "green";
        return true;
    }
}

function emailChecker(email) {
    var emailHelp = document.getElementById("emailHelp");
    if (email == "") {
        emailHelp.innerHTML = "Tidak boleh kosong!"
        emailHelp.style.color = "red";
        return false;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) == false) {
        emailHelp.innerHTML = "Tidak valid!"
        emailHelp.style.color = "red";
        return false;
    } else {
        emailHelp.innerHTML = "Sesuai!"
        emailHelp.style.color = "green";
        return true;
    }
}

function passwordChecker(password) {
    var passwordHelp = document.getElementById("passwordHelp");
    if (password == "") {
        passwordHelp.innerHTML = "Tidak boleh kosong!"
        passwordHelp.style.color = "red";
        return false;
    } else if (password.length < 8) {
        passwordHelp.innerHTML = "Minimal 8 karakter"
        passwordHelp.style.color = "red";
        return false;

        // } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(password) == false) {
        //     passwordHelp.innerHTML = "Tidak valid!"
        //     passwordHelp.style.color = "red";
    } else {
        passwordHelp.innerHTML = "Sesuai!"
        passwordHelp.style.color = "green";
        return true;
    }
}

function confirmPasswordChecker(password, cpassword) {
    var passwordHelp = document.getElementById("confirmPasswordHelp");
    if (cpassword == "") {
        passwordHelp.innerHTML = "Tidak boleh kosong!"
        passwordHelp.style.color = "red";
        return false;
    } else if (cpassword != password) {
        passwordHelp.innerHTML = "Tidak sesuai!"
        passwordHelp.style.color = "red";
        return false;
    } else {
        passwordHelp.innerHTML = "Sesuai!"
        passwordHelp.style.color = "green";
        return true;
    }
}