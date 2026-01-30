const stu= [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// marks greater than or equal to 40
let a=stu.filter(s=>s.marks>=40)  
console.log(a)
// average of marks
let c=stu.reduce((ac,m)=>ac+m.marks,0)/stu.length
console.log(c)
let sa=stu.map(stu=>{
    if(stu.marks>=90){
        stu.grade='A+'
        return stu
    }
    else if(stu.marks>=80){
        stu.grade='A'
        return stu
    }
    else if(stu.marks>=70){
        stu.grade='B'
        return stu
    }   
    else if(stu.marks>=60){
        stu.grade='C'
        return stu
    }   
    else{
        stu.grade='D'
        return stu
    }
})