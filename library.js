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
        <p class="author">By. ${author}</p>
        <p class="pages">${pages} pages</p>
        <button class="remove-book">Remove</button>
    </div>
    `;
    const button = document.createElement('button');
    button.addEventListener('click' , () => {
        if (button.className === 'has-read book-btn'){
            button.className = 'has-not-read book-btn';
            button.textContent = 'Has Not Read';
        } else {
            button.className = 'has-read book-btn';
            button.textContent = 'Has Read';
        }
    })
    if (read) {
        button.className = 'has-read book-btn';
        button.textContent = "Has Read";
    } else {
        button.className = 'has-not-read book-btn';
        button.textContent = "Has Not Read";
    }
    div.appendChild(button);
    bookSets.push(new BookSet(new Book(title, author, pages, read), div));
    const remove = div.querySelector('button.remove-book');
    remove.addEventListener('click', () => {
        const div = button.parentElement;
        const index = bookSets.indexOf(div);
        div.parentElement.removeChild(div);
        bookSets.splice(index, 1);
    })
    bookContainer.appendChild(div);
    console.log("TEST");
    console.log(bookSets);
}

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
    const title = document.querySelector('input.title').value;
    const author = document.querySelector('input.author').value;
    const pages = document.querySelector('input.pages').value;
    const read = document.querySelector('#has-read').checked;
    const notRead = document.querySelector('#has-not-read').checked;
    if (title === '' || author === '' || pages === '' || (read == false && notRead === false)) {
        return;
    } else {
        document.querySelector('input.title').value = '';
        document.querySelector('input.author').value = '';
        document.querySelector('input.pages').value = '';
        if (read) {
            document.querySelector('#has-read').checked = false
        } else {
            document.querySelector('#has-not-read').checked = false
        }
        console.log (title + " " + author + " " + pages + " " + read);
        createBook(title, author, pages, read);
        addBookForm.style.display = 'none';
        main.style.display = 'flex';
    }
    
})






