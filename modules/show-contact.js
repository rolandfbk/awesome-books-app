export const display_Contact = (book_list, add_book, contact_info, list, add, contact) => {
  book_list.style.display = 'none';
  add_book.style.display = 'none';
  contact_info.style.display = 'flex';
  contact.style.color = '#1b628b';
  contact.style.fontWeight = 'bold';
  add.style.color = '#000';
  add.style.fontWeight = 'normal';
  list.style.color = '#000';
  list.style.fontWeight = 'normal';
}