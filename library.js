
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const addBook = document.querySelector('.Add-book');
const addBookForm = document.querySelector('.add-book-form');
const main = document.querySelector('.main');
addBook.addEventListener('click', () => {
    addBookForm.style.display = 'flex';
    main.style.display = 'none'
})








const bookBtns = document.querySelectorAll('.book-btn');

bookBtns.forEach((button) => {
    button.addEventListener
})