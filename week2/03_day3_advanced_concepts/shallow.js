/** const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              const usercopy={...user};
              usercopy.name="Chantiii"
             usercopy.preferences.theme="light"
             console.log("orginal:",user)
                console.log("copy:",usercopy)
**/
//deep copy
/**const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
const ordercopy=JSON.parse(JSON.stringify(order));
ordercopy.customer.address.city="Bangalore"
ordercopy.items[0].price=65000
console.log("original:",order)
console.log("copy:",ordercopy)**/
let product={
    productName:"Laptop",
    price:70000,
    brand:"Dell",

}
let discount={...product,price:55000,brand:"Lenovo"}
console.log("original:",product)
console.log("discounted:",discount)
