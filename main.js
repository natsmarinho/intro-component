
const dataForm = document.querySelectorAll(".user-data");
const msgError = document.querySelectorAll(".msg-error");
const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;
const iconError = document.querySelectorAll(".error-icon");
const btnClaim = document.querySelector(".btn-claim");
const msgSuccess = document.querySelector(".container-msg-success");

function setError(index) {
    dataForm[index].style.border = "2px solid #FF7979";
    msgError[index].style.display = "block";
    iconError[index].style.display = "block";
}

function removeError(index) {
   dataForm[index].style.border = "1px solid #DEDEDE"; 
   msgError[index].style.display = "none";
   iconError[index].style.display = "none";
}

function nameValidate() {
    if (dataForm[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

function lastNameValidate() {
    if (dataForm[1].value.length < 3) {
        setError(1);
    } else {
        removeError(1);
    }
}

function emailValidate() {
    if (!regexEmail.test(dataForm[2].value)) {
        setError(2);
    } else {
        removeError(2);
    }
}

function passwordValidate() {
    if(dataForm[3].value.length < 8) {
        setError(3);
    } else {
        removeError(3);
    }
}

function refresh() {
    for (let i = 0; i < dataForm.length; i++) {
        dataForm[i].value = "";
    }
}

btnClaim.addEventListener("click", claim);
function claim() {
    nameValidate();
    lastNameValidate();
    emailValidate();
    passwordValidate();
    refresh();

    setTimeout(function() {
        msgSuccess.classList.add("show-container");
    }, 100)
    
    setTimeout(function() {
    msgSuccess.classList.remove("show-container");
    }, 3000)
}


