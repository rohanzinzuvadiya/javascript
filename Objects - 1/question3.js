// 3. Question: Write a function to change the 'pages' property to 300 of object books.


const books = {
    pages: 200 
};

function updateBookPages() {
    books.pages = 300;
  }
  updateBookPages();
  console.log(books); // Output: { title: 'JavaScript for Beginners', pages: 300 }