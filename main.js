
const dataForm = document.querySelectorAll(".user-data");
const msgError = document.querySelectorAll(".msg-error");
const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;
const iconError = document.querySelectorAll(".error-icon");
const btnClaim = document.querySelector(".btn-claim");
const msgSuccess = document.querySelector(".container-msg-success");

function setError(i) {
    dataForm[i].style.border = "2px solid #FF7979";
    msgError[i].style.display = "block";
    iconError[i].style.display = "block";
}

function removeError(i) {
   dataForm[i].style.border = "1px solid #DEDEDE"; 
   msgError[i].style.display = "none";
   iconError[i].style.display = "none";
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

function showMsg() {
  let inputsPreenchidos = true;
  for(let i = 0; i < dataForm.length; i++) {
    if(!dataForm[i].value) {
        inputsPreenchidos = false;
        break;
    }
  }

  if(inputsPreenchidos == true) {
    setTimeout(function() {
            msgSuccess.classList.add("show-container");
        }, 100)
        
        setTimeout(function() {
        msgSuccess.classList.remove("show-container");
        }, 3000)
  }
}

btnClaim.addEventListener("click", claim);
function claim() {
    nameValidate();
    lastNameValidate();
    emailValidate();
    passwordValidate();
    refresh();
    showMsg();
}


