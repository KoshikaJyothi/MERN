const students = [
  { id: 1, name: "Ravi", age: 18 },
  { id: 2, name: "Anjali", age: 20 },
  { id: 3, name: "Kiran", age: 19 },
  { id: 4, name: "Sneha", age: 18 },
  { id: 5, name: "Arjun", age: 21 }
];
let r1=students.filter(student=>student.age>18)
console.log(r1)
let r2=students.map(student=>{
    if(student.name=='Arjun'){
        return {
            id:student.id,
            name:student.name,
            age:student.age+2
    }
}
    return student
})
console.log('r2',r2)
let sumofages=students.reduce((a,e)=>a+e.age,0)
console.log('sumofages',sumofages)

