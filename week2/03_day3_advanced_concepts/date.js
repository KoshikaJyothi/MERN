let date=new Date();
// 1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log(date.toString());
console.log("year:",date.getFullYear());
console.log("month: ",date.getMonth()+1);
console.log("date:",date.getDate());
console.log("day Of week:",date.getDay());
console.log("hours:",date.getHours());
console.log("minutes:",date.getMinutes());
console.log("seconds:",date.getSeconds());
let dd=date.getDate();
let mm=date.getMonth()+1;
let yyyy=date.getFullYear();    
let hh=date.getHours();
let min=date.getMinutes();
let ss=date.getSeconds();
console.log(`${dd}-${mm}-${yyyy} ${hh}:${min}:${ss}`);
let enrollmentDeadline = new Date("2026-01-20");

let today=new Date()
if(today<enrollmentDeadline){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");
}
let indate=new Date("2026-02-30");
if(indate.getDate()!==30){
    console.log("Invalid date");
}
let dob=new Date("2000-05-15");
let age=today.getFullYear()-dob.getFullYear();
console.log(age);