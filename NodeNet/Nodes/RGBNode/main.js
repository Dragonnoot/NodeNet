//        ↓  ↓ ██ Will be Sourced from Server ██  ↓  ↓

let fullData = {QOPAL: {userName: "GeoDrake", signed: true, accountAge: 1}, POOPOO: {userName: "yeeHaw", signed: false, accountAge: 0}};

//        ↓  ↓ ██            Local            ██  ↓  ↓
 
let userData = {userName: "GeoDrake", userID: "QOPAL", signed: true}; // If user gets to this page, signed value is already true.

function grabAge() {

    var userUserID = userData.userID;
    var userInnerData = fullData[userUserID];

    return userInnerData.accountAge;

}

if (!grabAge()) {
    const killUserAccess = 1;
    while (killUserAccess) {
        document.getElementsByClassName("everything").innerHTML = "No.";  
        alert("!!‼ You are not meant to be here ‼!!");
    }
}