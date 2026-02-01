const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//list of in stock items
let a=cart.filter(item =>item.inStock)
console.log(a)
//list of item names with total price
let b=cart.map(item=>({name:item.name,tprice:item.price*item.quantity}))
console.log(b)
//total cart value
let c=cart.reduce((acc,ele)=>acc+ele.price*ele.quantity,0)
console.log(c)
//find item with name "Mouse"
let d=cart.find(item=>item.name=="Mouse")
console.log(d)
let e=cart.findIndex(item=>item.name=="Keyboard")
console.log(e)