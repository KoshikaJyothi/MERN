let a=[56,67,78,99,90]
let b=[]    
for(let i of a){
    if(i>70){
        b.push(i)
    }
}
console.log(b)
let salary=[100,200,300]
//add 50 to each element
for(let i in salary){
    salary[i]=salary[i]+50
}
console.log(salary)