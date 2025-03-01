const form = document.getElementById('form');
const text = document.getElementById('user_quote');
const author = document.getElementById('name');
const submitButton = document.getElementById('submit-button');
const quotesContainer = document.getElementById('quote-list');
let counter = document.getElementById('count');
let quoteCount = 0;

function updateCounter() {
    quoteCount++;

    if (quoteCount <= 1) {
        counter.textContent = `${quoteCount} citation`;
    } else {
        counter.textContent = `${quoteCount} citations`;
    }
};

function addQuote(quote, author) {

    const newQuote = document.createElement('p');
    newQuote.classList.add('text');
    newQuote.textContent = quote;

    const newAuthor = document.createElement('p');
    newAuthor.classList.add('author');
    newAuthor.textContent = `- ${author}`;
    
   const newQuoteElement = document.createElement('div');
    newQuoteElement.classList.add('quote');
    newQuoteElement.appendChild(newQuote);
    newQuoteElement.appendChild(newAuthor);

    quotesContainer.appendChild(newQuoteElement);

};

form.addEventListener('submit', function (event) {
    event.preventDefault();
   
    // Vérification des champs:

    if (text.value.trim() === "" || author.value.trim() === "" ) {
        alert('Veuillez remplir tous les champs !')
        return;
    }
    addQuote(text.value, author.value);

    updateCounter()


    // Réititialiser les champs après soumission

    text.value = "";
    author.value = "";
});