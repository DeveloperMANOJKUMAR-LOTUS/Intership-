// Initialize Firebase (ADD YOUR OWN DATA)
// import "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js"
var config = {
    apiKey: "AIzaSyBt4RcDz7OhD32Ksq-agr-bH4uVoRhQG-g",
    authDomain: "contact-form-dc11f.firebaseapp.com",
    databaseURL: "https://contact-form-dc11f-default-rtdb.firebaseio.com",
    projectId: "contact-form-dc11f",
    storageBucket: "contact-form-dc11f.appspot.com",
    messagingSenderId: "360234854243",
    appId: "1:360234854243:web:cb3bd2dcc0647e04039556",
    measurementId: "G-Q2FDWF5FFT"

  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }