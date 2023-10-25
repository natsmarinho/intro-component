const claimBtn = document.querySelector(".btn-claim").addEventListener("click", claim);
const dataForm = document.querySelectorAll(".user-data");
const msgError = document.querySelectorAll(".msg-error");
const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

function setError() {
    dataForm.forEach(element => {
        element.style.border = "2px solid #FF7979";
        msgError.forEach(mesage => {
            mesage.style.display = "block";
        })
    });
}

function removeError() {
    msgError.style.display = "none";
    dataForm[i].style.border = "1px solid #DEDEDE"
}

function claim() {
    if(regexEmail.test(dataForm[2].value)) {
        removeError();
    } else {
        setError();
    }
}
