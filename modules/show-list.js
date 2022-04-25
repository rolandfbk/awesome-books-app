export const displayList = (booklist, addbook, contactinfo, list, add, contact) => {
  booklist.style.display = 'flex';
  addbook.style.display = 'none';
  contactinfo.style.display = 'none';
  list.style.color = '#1b628b';
  list.style.fontWeight = 'bold';
  add.style.color = '#000';
  add.style.fontWeight = 'normal';
  contact.style.color = '#000';
  contact.style.fontWeight = 'normal';
}