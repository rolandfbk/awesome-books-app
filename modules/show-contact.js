export const displayContact = (booklist, addbook, contactinfo, list, add, contact) => {
  booklist.style.display = 'none';
  addbook.style.display = 'none';
  contactinfo.style.display = 'flex';
  contact.style.color = '#1b628b';
  contact.style.fontWeight = 'bold';
  add.style.color = '#000';
  add.style.fontWeight = 'normal';
  list.style.color = '#000';
  list.style.fontWeight = 'normal';
}