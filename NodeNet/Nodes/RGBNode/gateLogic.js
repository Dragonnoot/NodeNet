var codeHasRun = 0;

var fs = require("fs");

// Open a new file with name input.txt and write Simply Easy Learning! to it.

fs.writeFile('input.txt', 'crunchy (:', function(err) {

   if (err) {

      return console.error(err);

   }

   // Read the newly written file and print all of its content on the console
   fs.readFile('input.txt', function (err, data) {

      if (err) {

         return console.error(err);

      }
      else {
        alert(data);
      }

   });

});

function doEverything() {

  if(codeHasRun) {return}

  codeHasRun += 1;

  const field = document.getElementById('flexibleSpace');

  function logField(fieldData) {
    field.innerHTML = fieldData;
  }

  logField("[1]> Initializing...");

  //        ↓  ↓ ██ Will be Sourced from Server ██  ↓  ↓

  let fullData = {QOPAL: {userName: "GeoDrake", signed: 1, accountAge: 0}, POOPOO: {userName: "yeeHaw", signed: false, accountAge: 0}}; // <-- note that this data will be confined to the back end. STILL NEED LOGIN SYSTEM.

  // ↑↑▬ NOT VISIBLE TO USER. IF THIS IS VISIBLE THEN SECURITY IS GONE. ▬↑↑

  //        ↓  ↓ ██            Local            ██  ↓  ↓
  
  let userData = {userName: "GeoDrake", userID: "QOPAL", signed: false};
  let signUpdated = false;

  // Make sure signed field is accurate:

  function updateSigned(userUserName, userUserID) {

    logField("[2-1]> Updating Sign Status...");

    let innerFullData = fullData[userUserID];
    codeHasRun += 1;
    
    if (innerFullData.userName == userUserName) {
      userData.signed = innerFullData.signed;
    }
    else {
      userData.signed = false;
      logField("There was an error! Your recorded username, " +  userUserName + ", does not match your UserID." + "[Error occured at 2-1, supposed to transition to 2-2]");
      alert("Sorry, there was a bad error! Report: Sent username: " + userUserName + ", expected " + innerFullData.userName);
    }

    logField("[2-2]> Noting update of sign...");
    signUpdated = true;

  }
  function findUserData() {
    codehasRun += 1;
  }

  updateSigned(userData.userName, userData.userID);

  // Check that user is signed:

  function isSigned() {

    logField("[3-1]> Checking that you're signed...")

    if(userData.signed == true) {
      logField("[3-2]> You're signed! Showing Connect button...");
      return true;
    }
    else {
      logField("There was an error! You either aren't signed or haven't been updated. Will try again! [Error occured at 3-1, supposed to transition to 3-2]");
      alert("Sorry, there was a bad error! Report: Must be signed. Sign status: " + userData.signed + ", Updated: " + signUpdated);

      updateSigned(userData.userName, userData.userID);
      findUserData();

      if(userData.signed == true) {
        logField("[3-2]> You're signed! Showing Connect button...");
        return true;
      }
      else {
        logField("You still either aren't signed properly or can't be updated, but we've already tried again to update your status.  [Error occured at 3-1, supposed to transition to 3-2 and already retried updating]");
        alert("Sorry, there was a bad error! Report: Must be signed. Sign status: " + userData.signed + ", Updated: " + signUpdated);
        return false;
      }
    }
  }

  if (isSigned()) {
    logField("<button id='connectButton'>Connect</button>"); 
  }

  const connectButton = document.getElementById('connectButton');

  connectButton.addEventListener('click', function() {
    var userUserID = userData.userID;
    var innerUserData = fullData[userUserID];

    innerUserData.accountAge = 1; //Would send this data to server to be retrieved by main.html
    window.open("./main.html", "_self");
  });

  codeHasRun += 1;
}

setTimeout(() => doEverything(), 1000);
