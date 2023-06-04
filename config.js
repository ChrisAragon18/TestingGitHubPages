// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHJeYvUEGbMg0GugmCsiaq29x9yWHF22k",
    authDomain: "testproject-e53e8.firebaseapp.com",
    projectId: "testproject-e53e8",
    storageBucket: "testproject-e53e8.appspot.com",
    messagingSenderId: "368805694655",
    appId: "1:368805694655:web:d44ac2029ceb0e02380a0a",
    measurementId: "G-P9307K978D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth firestone references
const auth = firebase.auth()
const db = firebase.firestone()
const analytics = firebase.analytics()

function login() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        alert(cred.user.email + " has logged in")
    })
}

function signup() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        alert(cred.user.email + " has signed up")
    })
}