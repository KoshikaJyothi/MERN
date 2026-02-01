
let isLoggedIn = true;      
let isProfileComplete = false;
let message = '';
if (!isLoggedIn) {
    message = "Please login";
}       
else if (isLoggedIn && !isProfileComplete) {
    message = "Complete your profile";
}
else {
    message = "Welcome back!";
}
console.log(message);