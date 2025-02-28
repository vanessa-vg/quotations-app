const form = document.getElementById('form');
const text = document.getElementById('user_quote');
const author = document.getElementById('name');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(text.value);
    console.log(author.value);
}
);

function addQuote(quote, author) {
    const newQuote = document.createElement('p');
    newQuote.classList.add('text');
    const newAuthor = document.createElement('p');
    newAuthor.classList.add('author');
    newQuote = text.value
    newAuthor = author.value
};
