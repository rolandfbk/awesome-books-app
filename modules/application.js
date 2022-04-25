export const displayList = (list) => {
  document.getElementById('book-list').style.display = 'flex';
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('contact-info').style.display = 'none';
  list.style.color = '#1b628b';
  list.style.fontWeight = 'bold';
  document.getElementById('add').style.color = '#000';
  document.getElementById('add').style.fontWeight = 'normal';
  document.getElementById('contact').style.color = '#000';
  document.getElementById('contact').style.fontWeight = 'normal';
  location.reload();
}

export const displayAdd = (add) => {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-book').style.display = 'block';
  document.getElementById('contact-info').style.display = 'none';
  add.style.color = '#1b628b';
  add.style.fontWeight = 'bold';
  document.getElementById('list').style.color = '#000';
  document.getElementById('list').style.fontWeight = 'normal';
  document.getElementById('contact').style.color = '#000';
  document.getElementById('contact').style.fontWeight = 'normal';
}

export const displayContact = (contact) => {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('contact-info').style.display = 'flex';
  contact.style.color = '#1b628b';
  contact.style.fontWeight = 'bold';
  document.getElementById('add').style.color = '#000';
  document.getElementById('add').style.fontWeight = 'normal';
  document.getElementById('list').style.color = '#000';
  document.getElementById('list').style.fontWeight = 'normal';
}