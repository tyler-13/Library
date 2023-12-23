bookSets = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function BookSet(book, html) {
    this.book = book;
    this.html = html;
}


function createBook(title, author, pages, read) {
    const div = document.createElement('div');
    div.className = 'book'
    const bookContainer = document.querySelector('.book-container');
    div.innerHTML = `
    <div class="book-info">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <p class="pages">${pages} pages</p>
    </div>
    `;
    const button = document.createElement('button');
    if (read) {
        button.className = 'has-read';
        button.textContent = "Has Read";
    } else {
        button.className = 'has-not-read';
        button.textContent = "Has Not Read";
    }
    div.appendChild(button);
    bookSets.push(new BookSet(new Book(title, author, pages, read), div));
    bookContainer.appendChild(div);
    console.log("TEST");
    console.log(bookSets);
}
const testButton = document.querySelector('.temp');
testButton.addEventListener('click', () => {
    createBook('the whole', 'tyler', '567', true);

})


const addBook = document.querySelector('.Add-book');
const addBookForm = document.querySelector('.add-book-form');
const main = document.querySelector('.main');

addBook.addEventListener('click', () => {
    addBookForm.style.display = 'flex';
    main.style.display = 'none';
})

const submit = document.querySelector('.submit');
const bookContainer = document.querySelector('.book-container');
submit.addEventListener('click', () => {
    const title = document.querySelector('title').textContent;
    const author = document.querySelector('author').textContent;
    const pages = document.querySelector('pages').textContent;
    const read = document.querySelector('#has-read').checked;
    console.log(`${title} , ${author} , ${pages} , ${read}`);

})






const bookBtns = document.querySelectorAll('.book-btn');

bookBtns.forEach((button) => {
    button.addEventListener
})