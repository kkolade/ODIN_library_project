const myLibrary = [],
addBookBtn = document.querySelector('#add-book-button');

function Book(title, author, pages, isRead){
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

Book.prototype.info = function (){
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read':'not read yet'}`;
}

const addBookToLibrary = (e) => {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let isRead = document.querySelector('#is-read').checked;

  const book = new Book(title, author, pages, isRead);
  
  myLibrary.push(book);

  // title.value = '';
  // author.value = '';
  // pages.value = '';
  // isRead.checked = false
}

addBookBtn.addEventListener('click', addBookToLibrary)

const displayBook = () => {
  myLibrary.forEach(book => {

  })
}