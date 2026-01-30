// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// /*Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90*/
let marks = {
    maths: 78,
    physics: 65,          
    chemistry: 82,
    english: 55
};

// 1. Calculate total marks
let total = 0;         
for (let subject in marks) {
    total += marks[subject];
}
console.log('Total Marks:', total);

// 2. Calculate average marks
let average = total / Object.keys(marks).length;
console.log('Average Marks:', average);             
// 3. Find the highest scoring subject
let highestSubject = '';
let highestMarks = 0;       
for (let subject in marks) {
    if (marks[subject] > highestMarks) {
        highestMarks = marks[subject];
        highestSubject = subject;
    }          
}
console.log('Highest Scoring Subject:', highestSubject, 'with marks', highestMarks);        
// 4. Add a new subject computer: 90
marks.computer = 90;
console.log('Updated Marks:', marks);   
// --- IGNORE ---
