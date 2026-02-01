let a=10;
console.log("Value of a:",a);
try{
    console.log(b);
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}
finally{
    a=20;
}
console.log("Value of a:",a);

