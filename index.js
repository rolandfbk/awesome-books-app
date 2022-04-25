import { DateTime } from './modules/luxon.js';

import {display_List} from './modules/show-list.js';
import {display_Add} from './modules/show-add.js';
import {display_Contact} from './modules/show-contact.js';

import {ourForm} from './modules/elements.js';
import {BookObject} from './modules/app.js';


if (localStorage.getItem('bookContent')) {
  BookObject.setContent();
} else {
  BookObject.saveToLocal()
}

const removeButton = document.querySelectorAll('.removeButton');

removeButton.forEach((button, index) => {
  let removeBtn = new BookObject
  removeBtn.remove(button, index);
});

ourForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;

  let newBook = new BookObject(bookTitle, bookAuthor);
  newBook.add();
  ourForm.reset();

});

const book_list = document.getElementById('book-list');
const add_book = document.getElementById('add-book');
const contact_info = document.getElementById('contact-info');
const list = document.getElementById('list');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

list.addEventListener('click', () => {
  display_List(book_list, add_book, contact_info, list, add, contact);
  location.reload();
});

add.addEventListener('click', () => {
  display_Add(book_list, add_book, contact_info, list, add, contact);
});

contact.addEventListener('click', () => {
  display_Contact(book_list, add_book, contact_info, list, add, contact);
});

const mydate = document.getElementById('mydate');
const now = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
mydate.innerHTML = now;