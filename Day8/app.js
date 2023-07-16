import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  child,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xKy7rcSsgwiGaaBBNZOM7cTDS48BQ2k",
  authDomain: "todolistapp-e2a5d.firebaseapp.com",
  databaseURL: "https://todolistapp-e2a5d-default-rtdb.firebaseio.com",
  projectId: "todolistapp-e2a5d",
  storageBucket: "todolistapp-e2a5d.appspot.com",
  messagingSenderId: "440320632889",
  appId: "1:440320632889:web:481f75098b14f0100b45e8",
  measurementId: "G-VJT42Y73SZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let object;
let dbRef = ref(database, "User/"); // truy vết đến Trường dữ liệu tên là User
onValue(dbRef, function (data) {
  // console.log(data.val());
  object = data.val();
});

let addButton = document.getElementById("btn");
let inputName = document.getElementById("name");
// add user
addButton.addEventListener("click", () => {
  if (inputName.value != "") {
    console.log("Hello");
    let randomKey = push(child(ref(database), "User")).key;
    set(ref(database, "User/" + randomKey), {
      name: inputName.value,
    });
    inputName.value = "";
    alert("Add successful !!!");
    let dbRef = ref(database, "User/"); // truy vết đến Trường dữ liệu tên là User
    onValue(dbRef, function (data) {
      // console.log(data.val());
      object = data.val();
    });
  }
});

// read user
let readBtn = document.getElementById("read");
readBtn.addEventListener("click", () => {
  console.log("Testtttttttttttt");
  for (let key in object) {
    let divPerson = document.createElement("div");
    divPerson.className = "infor";
    divPerson.innerText = object[key].name;
    document.body.appendChild(divPerson);
    console.log(object[key].name + " " + key);
  }
});

// let obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   console.log(key + " = " + obj[key]);
// }
