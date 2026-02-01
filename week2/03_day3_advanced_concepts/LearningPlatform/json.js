let student={
    name:"Ravi",
    age:21,
    courses:["JS","React","Node"]
}
console.log(typeof student)
let res = JSON.stringify(student)
console.log(typeof res)
console.log(res)
let studentObj = JSON.parse(res)
console.log(studentObj)
console.log(typeof studentObj)