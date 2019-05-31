//<script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
// var firebase = require(firebase);
// const firebaseapp = 'firebase/app';
// const storage = 'firebase/storage';
// var secondary = firebase.initializeApp(secondaryAppConfig, "secondary");

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCBQOeETaQLGbhcsZZ1GkbP7OD23ZI8bnQ",
    authDomain: "authwithdb-6a42a.firebaseapp.com",
    databaseURL: "https://authwithdb-6a42a.firebaseio.com",
    projectId: "authwithdb-6a42a",
    storageBucket: "authwithdb-6a42a.appspot.com",
    messagingSenderId: "706470838018"
  };

    const firebase=require(firebase);
  firebase.initializeApp(config);

  //var database = firebase.database();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var address = getInputVal('address');
    var address1 = getInputVal('address1');
    var city = getInputVal('city');
    var region = getInputVal('region');
    var country = getInputVal('country');
    var postal = getInputVal('postal');
    var emailId = getInputVal('emailId');
    var phone = getInputVal('phone');
   
  
    // Save message
    saveMessage(fname, lname, address, address1, city, region, country, postal, emailId, phone);
  
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
  function saveMessage(fname, lname, address, address1, city, region, country, postal, emailId, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname:lname,
      address:address,
      address1:address1,
      city:city,
      region:region,
      country:country,
      postal:postal,
      email:email,
      phone:phone
    });
  }