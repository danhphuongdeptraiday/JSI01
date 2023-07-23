// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCUw6TLTvXNJth6TXcYXA_jnQT3w5Gg8g",
  authDomain: "login-4c7ec.firebaseapp.com",
  projectId: "login-4c7ec",
  storageBucket: "login-4c7ec.appspot.com",
  messagingSenderId: "937697811597",
  appId: "1:937697811597:web:ff6cd56a3ebc1c9fd956c4",
  measurementId: "G-ZK2Z8MNNC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// sign up
let signUp = document.getElementById("signUp");
signUp.addEventListener("click", function () {
  let username = document.getElementById("usernameSignup").value;
  let email = document.getElementById("emailSignUp").value;
  let password = document.getElementById("passwordSignUp").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
      });
      alert("user created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

// login
let login = document.getElementById("login");
login.addEventListener("click", function () {
  let email = document.getElementById("usernameLogin").value;
  let password = document.getElementById("passwordLogin").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      let dt = new Date();
      const user = userCredential.user;
      update(ref(database, "users/" + user.uid), {
        lastLogin: dt,
      });

      alert("User login success");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
