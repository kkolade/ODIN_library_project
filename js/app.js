// Variables
const myLibrary = [],
addBookBtn = document.querySelector('#add-book-button'),
addNewBook = document.querySelector('.add-new-book'),
addBookForm = document.querySelector('.add-book-form'),
bookShelf = document.querySelector('.main');
// Functions
function Book(title, author, pages, isRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

Book.prototype.info = function (){
  return `<h3>${this.title}</h3> <span>by</span> <p> ${this.author}</p>  <p>${this.pages} pages</p> <p> ${this.isRead ? 'Read':'Not read yet'}</p>`;
}

const displayBook = (books) => {
books.forEach(book => {
    // create Book Card elements
  const card = document.createElement('div'),
  bookDetail = document.createElement('div'),
  removeBookBtn = document.createElement('button');
  bookDetail.innerHTML = book.info();
  removeBookBtn.textContent = 'Remove Book'

  card.className = 'book-card';
  bookDetail.className = 'book-detail';
// Compose book card
  card.append(bookDetail, removeBookBtn);

bookShelf.append(card);
  })
}

const addBookToLibrary = (e) => {
  e.preventDefault();
  
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let isRead = document.querySelector('#is-read').checked;
  
  const book = new Book(title, author, pages, isRead);
  
  myLibrary.push(book);
  
  addBookForm.reset()
  
  // location.reload()

  displayBook(myLibrary)
  addBookForm.classList.add('hidden');
}

const displayForm = () => {
addBookForm.classList.remove('hidden');
}



// Event Listeners

addNewBook.addEventListener('click', displayForm)

addBookBtn.addEventListener('click', addBookToLibrary)

