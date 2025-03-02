const form = document.getElementById('form');
const text = document.getElementById('user_quote');
const author = document.getElementById('name');
const submitButton = document.getElementById('submit-button');
const quotesContainer = document.getElementById('quote-list');
let counter = document.getElementById('count');
let quoteCount = 0;

// Récupérer les citations du localStorage ou initialiser un tableau vide
let citations = JSON.parse(localStorage.getItem('citations')) || [];

// Fonction pour afficher les citations à partir du tableau
function displayQuotes() {
    // Vider le conteneur avant d'afficher les citations
    quotesContainer.innerHTML = '';

    // Parcourir chaque citation et l'afficher
    citations.forEach((citation, index) => {

        const newQuote = document.createElement('p');
        newQuote.classList.add('text');
        newQuote.textContent = citation.text; //  avant newQuote.textContent = quote;
        
        const newAuthor = document.createElement('p');
        newAuthor.classList.add('author');
        newAuthor.textContent = `- ${citation.author}`;

        // Création du bouton de suppression
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => removeQuote(index)); // Appel de la fonction removeQuote

        const newQuoteElement = document.createElement('div');
         newQuoteElement.classList.add('quote');
         newQuoteElement.appendChild(newQuote);
         newQuoteElement.appendChild(newAuthor);
         newQuoteElement.appendChild(deleteButton); // Ajout du bouton
        
         quotesContainer.appendChild(newQuoteElement);
    });
    
    // Mettre à jour le compteur
    updateCounter()
}

function removeQuote(index) {
    citations.splice(index, 1);
    localStorage.setItem('citations', JSON.stringify(citations)); // Met à jour le localStorage
    displayQuotes();
}

// function updateCounter() {

//     quoteCount++;

// if (quoteCount <= 1) {
//     counter.textContent = `${quoteCount} citation`;
// } else {
//     counter.textContent = `${quoteCount} citations`;
// }

// };

// Nouvelle fonction pour mettre à jour le compteur
function updateCounter() {
    quoteCount = citations.length;
    
        if (quoteCount <= 1) {
            counter.textContent = `${quoteCount} citation:`;
        } else {
            counter.textContent = `${quoteCount} citations:`;
        }
};

// Fonction pour ajouter une citation au tableau ou au localStorage
function addQuote(quote, author) {
     const newCitation = {text: quote, author: author};

     // Ajouter la nouvelle citation au tableau
     citations.push(newCitation);

     // Sauvegarder le tableau dans le localStorage
     localStorage.setItem('citations', JSON.stringify(citations));

     // Afficher la nouvelle citation
     displayQuotes();
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
   
    // Vérification des champs:

    if (text.value.trim() === "" || author.value.trim() === "" ) {
        alert('Veuillez remplir tous les champs !');
        return;
    }

    //Ajouter la citation et mettre à jour l'affichage
    addQuote(text.value, author.value);



    // Réititialiser les champs après soumission
    text.value = "";
    author.value = "";
});

// Charger les citations dès que la page est prête
displayQuotes();
