
// Create an array of objects representing quotes.
// Each quote object contains `text`, `author`, and `category` properties.
// If category is education show .

const quotes = [
    { text: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt", 
          category: "inspiration" },

    { text: "Education is the most powerful weapon which you can use to change the world.", 
        author: "Nelson Mandela", 
          category: "education" },

    { text: "The only thing we have to fear is fear itself — and spiders.",
         author: "Franklin D. Roosevelt", 
          category: "humor" },

    { text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", 
        author: "Abigail Adams", 
         category: "education" },

    { text: "The biggest risk is not taking any risk...", 
        author: "Mark Zuckerberg", 
         category: "business" },

    { text: "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.", 
        author: "Kofi Annan", 
         category: "education" },
  ];
  
  // Filter quotes by category "education"

  const educationQuotes = quotes.filter(quote => quote.category === "education");
  console.log(educationQuotes);
  
  // Output:
  // [
  //   { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", category: "education" },
  //   { text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", author: "Abigail Adams", category: "education" },
  //   { text: "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.", author: "Kofi Annan", category: "education" }
  // ]