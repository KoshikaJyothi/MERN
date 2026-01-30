//filler(),map(),filter(),reduce(),find(),sort(),findindex(),foreach()
let marks=[90,87,99,67,56]
//filler() - fills all the elements with a static value
//filter selects the elements based on condition
let r=marks.filter(function(element){
  return element>70
})
console.log('filtered elements are',r)
let r1=marks.filter(mark=>mark>70)
console.log('r1',r1)
//find all marks between 30 and 90
let r2=marks.filter(mark=>mark>30 && mark<90)
console.log('r2',r2)
//map() - modifies each element based on condition
let r3=marks.map(function(element){
    return element+50
})
console.log('r3',r3)