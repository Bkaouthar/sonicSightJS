// Modal
const signInLink = document.getElementById("signInLink");
const log = document.getElementById("log");

signInLink.addEventListener("click", function (event) {
  event.preventDefault();
  log.style.display = "block"; 
});

window.addEventListener("click", function (event) {
  if (event.target == log) {
    log.style.display = "none";
  }
});
  //  Deplacement du formulaire dinscription et du cnx

const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.addEventListener("click", function() {
  loginForm.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", function() {
  loginForm.style.marginLeft = "0%";
});

signupLink.addEventListener("click", function(event) {
  loginForm.style.marginLeft = "-50%";
  event.preventDefault();
});



// validation cnx
function login() {
  var email = document.querySelector(".email1").value.trim();
  var password = document.querySelector(".pass1").value.trim();

  if (email === "" || password === "") {
    alert("Veuillez remplir tous les champs.");
    
  }

 
}

//validation d'inscription
function signup() {
  var nom = document.querySelector(".nom").value.trim();
  var email2 = document.querySelector(".email2").value.trim();
  var pass = document.querySelector(".pass2").value.trim();
  var confirmpass = document.querySelector(".confirm").value.trim();

  if (nom === "" || email2 === "" || pass === "" || confirmpass === "") {
    alert("Veuillez remplir tous les champs.");
    
  }

  if (pass !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    
  }
 
}
