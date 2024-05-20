
function checkInputs(event){

    event.preventDefault();
    
let userName = document.querySelector("#username-input").value;
let passWord = document.querySelector("#password-input").value;

if (userName.trim() === "" || passWord.trim() === "") {

  alert("Please fill in your details!");
} 

else
 {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Your in" + " " + userName+ " " + "😊";
}

}

 let login = document.querySelector("#login-form");
 login.addEventListener("submit", checkInputs);

