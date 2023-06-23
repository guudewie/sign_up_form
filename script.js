// To DOs
// 
// Form
// - hover & focus effect
// – validation
// – password validation with js


const PASS = document.getElementById("password")
const PASSCONFIRM = document.getElementById("password-repeat")
const PASSLABEL = document.getElementById("password-label")
const ERRORLABEL = window.getComputedStyle(PASSLABEL, "::after" )

PASSCONFIRM.addEventListener("input",() => checkPasswords())
PASS.addEventListener("input", () => checkPasswords())



function checkPasswords() {
    
    console.log("success")
    console.log(PASS.value)
    if (PASS.value !== PASSCONFIRM.value) {
        PASSLABEL.classList.add("error-password")
    } else {
        PASSLABEL.classList.remove("error-password")
    }
}
