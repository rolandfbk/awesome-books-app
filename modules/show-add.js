export const display_Add = (book_list, add_book, contact_info, list, add, contact) => {
  book_list.style.display = 'none';
  add_book.style.display = 'block';
  contact_info.style.display = 'none';
  add.style.color = '#1b628b';
  add.style.fontWeight = 'bold';
  list.style.color = '#000';
  list.style.fontWeight = 'normal';
  contact.style.color = '#000';
  contact.style.fontWeight = 'normal';
}