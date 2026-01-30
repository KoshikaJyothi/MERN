const price = 750;
let courseTag = '';     
if (price < 500) {  
    courseTag = "Budget Course";  
} else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
}
else {
    courseTag = "Premium Course";
}
console.log('Course Tag:', courseTag);
