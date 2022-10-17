import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBt4RcDz7OhD32Ksq-agr-bH4uVoRhQG-g",

    authDomain: "contact-form-dc11f.firebaseapp.com",

    databaseURL: "https://contact-form-dc11f-default-rtdb.firebaseio.com",

    projectId: "contact-form-dc11f",

    storageBucket: "contact-form-dc11f.appspot.com",

    messagingSenderId: "360234854243",

    appId: "1:360234854243:web:cb3bd2dcc0647e04039556",

    measurementId: "G-Q2FDWF5FFT"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  console.log(app);