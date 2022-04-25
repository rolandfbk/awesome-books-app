export const display_List = (book_list, add_book, contact_info, list, add, contact) => {
  book_list.style.display = 'flex';
  add_book.style.display = 'none';
  contact_info.style.display = 'none';
  list.style.color = '#1b628b';
  list.style.fontWeight = 'bold';
  add.style.color = '#000';
  add.style.fontWeight = 'normal';
  contact.style.color = '#000';
  contact.style.fontWeight = 'normal';
}