let marks=[90,87,99,67,56]
let sum=marks.reduce((accumulator,element)=>accumulator=accumulator<element?accumulator:element)
console.log('sum is',sum)
let r=marks.find(mark=>mark==67)
console.log('r is',r)
let r1=marks.findIndex(mark=>mark==67)
console.log(r1)