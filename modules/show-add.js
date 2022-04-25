/* eslint-disable import/prefer-default-export */
export const displayAdd = (booklist, addbook, contactinfo, list, add, contact) => {
  booklist.style.display = 'none';
  addbook.style.display = 'block';
  contactinfo.style.display = 'none';
  add.style.color = '#1b628b';
  add.style.fontWeight = 'bold';
  list.style.color = '#000';
  list.style.fontWeight = 'normal';
  contact.style.color = '#000';
  contact.style.fontWeight = 'normal';
};