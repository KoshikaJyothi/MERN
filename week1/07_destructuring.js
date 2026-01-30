//unpack object (destructuring)
let test={
    a:10,
    b:20,
    c:30
}
let {a,c}=test
console.log('a is',a)
//console.log('b is',b)
console.log('c is',c)


//complex object
let student={
    sno:1,
    name:'koshika',
    marks:[90,99,78],
    address:{
        city:'Hyderabad',
        pincode:500039
    },
//in js we can cretae obj directly without creating class 
getAvg:function(){
      //object processing
      let sum=0
      for(let i of this.marks){
          sum+=i
      }
      console.log('average is',sum/this.marks.length)
      //this keyword refers to current object
}
}
console.log('student name is',student.name)
console.log('student city is',student.address.city)
student.getAvg()