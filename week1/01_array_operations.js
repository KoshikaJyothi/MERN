//Aarray ordered collectio
//n
let marks=[90,87,99,67,56]
/*let skills=['html','javascript','angular']
console.log(marks)
console.log(skills)
let a=marks[0]
for(let i of marks){
    
}
console.log(a)
*/
//write a func that recieves an array as argument and returns the small element
function small(marks){
    return Math.min(marks)
}
function add(marks){
    let sum=0
    for(let i of marks){
        sum+=i
    }       
    return sum  
}
let skills=['html','css','javascript']
let [a,b,c]=skills
console.log('skill1 is',a)
//inserting
 //at start
 skills.unshift('bootstrap')
console.log('after adding at start',skills)
//at end
skills.push('angular')
console.log('after adding at end',skills)
//at specific position
//splice is used to remove,insert elements ***
skills.splice(0,0,'nodejs')
console.log('after adding at specific pos',skills)
//to remove
skills.splice(2,2) //removes 2 elements from index 2
console.log('after removing at specific pos',skills)
//to delete last element
skills.shift()//shift removes first element
console.log('after removing first element',skills)
skills.pop()//pop removes last element
console.log('after removing last element',skills)