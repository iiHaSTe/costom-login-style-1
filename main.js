/***********************************************************************************************************************************************************************************************************************************************************************************************/

const email = document.getElementById("email");
const pass = document.getElementById("password");

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
email.addEventListener('input', ()=>{
  if (email.value.match(emailPattern))
    email.style.borderColor = "rgb(27, 194, 48)";
  else if (email.value.length === 0)
    email.style.borderColor = "rgb(213, 213, 213)";
  else
    email.style.borderColor = "rgb(194, 70, 27)";
});
pass.addEventListener('input', ()=>{
  if (pass.value.length >= 8)
    pass.style.borderColor = "rgb(27, 194, 48)";
  else if (pass.value.length === 0)
    pass.style.borderColor = "rgb(213, 213, 213)";
  else
    pass.style.borderColor = "rgb(194, 70, 27)";
});
