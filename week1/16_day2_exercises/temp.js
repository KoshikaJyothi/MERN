const temp=[32, 35, 28, 40, 38, 30, 42]
let r1=temp.filter(t=>t>35)
console.log(r1)
let r2=temp.map(t=>(t*9/5)+32)
console.log(r2)
let r3=temp.reduce((a,e)=>a+e,0)/temp.length
console.log(r3)
let r4=temp.find(t=>t>40)
console.log(r4) 
let r5=temp.findIndex(t=>t==28)
console.log(r5)