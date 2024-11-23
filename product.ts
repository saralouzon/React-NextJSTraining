 //Task 4 >>
interface Product{
    name:string,
    price:number
}

function calculateTheTotalPrice (product : Product[]): number{
    return product.reduce((total,product) => total+product.price,0)
}

//for Testing
const products: Product[] = [
    { name: "Jaket", price: 200 },
    { name: "Car", price: 450 },
    { name: "Jeans", price: 50 },];
  console.log("The Total Price of Products:", calculateTheTotalPrice(products));

//Task 4 << 



//Task 5 >>
function validEmail(email:string):boolean{
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegx.test(email);
}

  // For Testing
  console.log("Is valid email (menna@155.com)", validEmail("menna@155.com")); 
  console.log("Is valid email (email):", validEmail("email")); 

//Task 5 <<