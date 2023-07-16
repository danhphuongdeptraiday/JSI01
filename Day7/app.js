// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  set,
  child,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS7NQEEukn3KfQ0aB0SqOTm7BOSq_ftMA",
  authDomain: "jsi01-4a54d.firebaseapp.com",
  projectId: "jsi01-4a54d",
  storageBucket: "jsi01-4a54d.appspot.com",
  messagingSenderId: "411515758499",
  appId: "1:411515758499:web:3b37df93381262a3d6dc16",
  measurementId: "G-K6L4X1BKB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // service

// create
let buttonInsert = document.querySelector(".insert");
buttonInsert.addEventListener("click", function () {
  console.log("hello");
  let randomKey = Math.floor(Math.random() * 100 + 1);
  console.log(randomKey);
  set(ref(database, "User/" + randomKey), {
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
  });
  alert("Create success, check you firebase");
});

let buttonRead = document.querySelector(".read");
buttonRead.addEventListener("click", function () {
  let dbRef = ref(database, "User/");
  onValue(dbRef, function (data) {
    console.log(data);
    data.forEach(function (singlePerson) {
      //   console.log(singlePerson);
      let key = singlePerson.key;
      let userInformation = singlePerson.val();
      //   console.log(userInformation);
      //   console.log(userInformation.name + " " + userInformation.age);
    });
  });
});
