
const firebaseConfig = {
    apiKey: "AIzaSyCoxFcVBqJN--MvXQ96oOKDExrhRuUS9bQ",
    authDomain: "formulario-89379.firebaseapp.com",
    projectId: "formulario-89379",
    storageBucket: "formulario-89379.appspot.com",
    messagingSenderId: "32102135086",
    appId: "1:32102135086:web:3abe685d2c906d362476bf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();