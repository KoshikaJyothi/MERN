let emp={
    id:1,
    name:'koshika',
    salary:45000
}
console.log('employee id is',emp.id)
emp.city="Hyderabad"
console.log('emp city is',emp.city)
emp.salary=50000
console.log('emp salary is',emp.salary)
delete emp.id
console.log('emp details are',emp)
Object.freeze(emp)
emp.name='jyothi'
console.log('employee name is',emp.name)
console.log(Object.keys(emp))
console.log(Object.values(emp))
console.log(Object.entries(emp))