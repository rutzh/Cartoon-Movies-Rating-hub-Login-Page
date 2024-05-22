//function that checks inputs
/*function checkInputs(event){

    event.preventDefault();
    
let userName = document.querySelector("#username-input").value;
let passWord = document.querySelector("#password-input").value;

if (userName.trim() === "" || passWord.trim() === "") {

  alert("Please fill in your details!");
} 

else
 {
  let h1 = document.querySelector("h1");
  h1.innerHTML = 
  "Your in" + " " + userName+ " " + "😊";
}

}

 let login = document.querySelector("#login-form");
 login.addEventListener("submit", checkInputs);
*/

//Function provides a registration form 
function registrationForm(event){

  //prevents browser from its default behaviour
  event.preventDefault();

document.getElementById("registration-form").style.display = "block";
 
  document.getElementById("login-form").style.display="none";

  


}
let registrationLink = document.getElementById("register-link");
registrationLink.addEventListener("click",registrationForm);