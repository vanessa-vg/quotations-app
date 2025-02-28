const formContainer = document.getElementById('form-container');

formContainer.addEventListener('click', submitForm => {
    const text = document.getElementById('user_quote');
    const author = document.getElementById('user_name');
    console.log(text, author);
})