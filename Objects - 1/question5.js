// 5. Question: Write a function to add a new property 'price' with the value 1200 to the 'laptop' object.

const laptop = {
    brand: 'Dell', 
    model: 'XPS' 
};

function addLaptopPrice() {
    laptop.price = 1200;
  }
  addLaptopPrice();
  console.log(laptop); // Output: { brand: 'Dell', model: 'XPS', price: 1200 }