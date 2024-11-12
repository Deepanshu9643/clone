import axios from "axios";

let signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        alert("All fields are required");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }



   try{
    let response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
        name,email,password
    })
    console.log(response.data);
   }
   catch(error){
       console.log(error);
   }
})