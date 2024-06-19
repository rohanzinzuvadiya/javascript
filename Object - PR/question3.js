function findAffordableBooks(books, budget) {
    let affordableBooks = [];
  
    for (let i = 0; i < books.length; i++) {
      if (books[i].price <= budget && books[i].quantityAvailable > 0) {
        affordableBooks.push(books[i]);
      }
    }
  
    return affordableBooks;
  }
  
  // Example usage:
  let books = [
    { title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
         price: 20, 
          quantityAvailable: 5 },

    { title: "1984", 
        author: "George Orwell", 
         price: 30, 
          quantityAvailable: 2 },

    { title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
         price: 25, 
          quantityAvailable: 0 },

    { title: "Pride and Prejudice", 
        author: "Jane Austen", 
         price: 66, 
          quantityAvailable: 10 },

    { title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
         price: 40, 
          quantityAvailable: 3 }
  ];
  
  let affordableBooks = findAffordableBooks(books, 60);
  
  console.log("Affordable books:");
  console.log(affordableBooks);