//Task 4 >>
function calculateTheTotalPrice(product) {
    return product.reduce(function (total, product) { return total + product.price; }, 0);
}
//for Testing
var products = [
    { name: "Jaket", price: 200 },
    { name: "Car", price: 450 },
    { name: "Jeans", price: 50 },
];
console.log("The Total Price of Products:", calculateTheTotalPrice(products));
//Task 4 << 
//Task 5 <<
function validEmail(email) {
    var emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegx.test(email);
}
// For Testing
console.log("Is valid email (menna@155.com)", validEmail("menna@155.com"));
console.log("Is valid email (email):", validEmail("email"));
//Task 5 <<