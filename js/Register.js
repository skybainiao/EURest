
let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let register = document.getElementById('register').value;
register.onclick=()=>writeUserData();
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyABXKTeI2T16mETkhYohvu4Y1X20hvL3cU",
  authDomain: "eufun-f0a72.firebaseapp.com",
  databaseURL: "https://eufun-f0a72-default-rtdb.europe-west1.firebasedatabase.app/", // Replace this with your URL
  projectId: "eufun-f0a72",
  storageBucket: "eufun-f0a72.appspot.com",
  messagingSenderId: "1041084911229",
  appId: "1:1041084911229:web:4df4ec093dcf32b2696b14",
  measurementId: "G-PQ3K5KZ2NJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var database = firebase.database();

function writeUserData() {
  console.log("1111111")
  firebase.database().ref('users/' + name).set({
    username: username,
    email: email,
    password : password
  });
}
