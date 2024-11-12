import firebaseApp from "./config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const auth = getAuth(firebaseApp);

let signupForm = document.querySelector(".signup");

signupForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;

      if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

try{
   let userCredential = await createUserWithEmailAndPassword(auth, email, password)
   console.log(userCredential);
   console.log(userCredential.user);
   
}catch(err){
    console.log(err.code);
    console.log(err.message);
}
});
