let quotes = [
    { text: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt", 
         category: "motivation" },

    { text: "Education is the most powerful weapon which you can use to change the world.", 
        author: "Nelson Mandela", 
         category: "education" },

    { text: "The only thing we have to fear is fear itself — and spiders.", 
        author: "Franklin D. Roosevelt", 
         category: "humor" },

    { text: "Knowledge is power.", 
        author: "Francis Bacon", 
         category: "education" },

    { text: "Be the change you wish to see in the world.", 
        author: "Mahatma Gandhi", 
         category: "inspiration" }
  ];
  
  let educationQuotes = quotes.filter(quote => quote.category === "education");
  
  console.log("Education quotes:");
  console.log(educationQuotes);