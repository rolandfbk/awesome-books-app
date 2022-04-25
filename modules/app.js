const list = document.getElementById('ourList');

class BookObject {
  constructor(titleName, authorName) {
    this.title = titleName;
    this.author = authorName;
  }

  static setContent() {
    list.innerHTML = '';

    const setBookContent = JSON.parse(JSON.stringify(localStorage.getItem('bookContent')));
    const newBookObj = JSON.parse(setBookContent);

    const div = [];
    const template = [];
    if (newBookObj.length > 0) {
      for (let i = 0; i < newBookObj.length; i += 1) {
        div[i] = document.createElement('tr');
        template[i] = `
          <td class="table-item">
            "${newBookObj[i].title}" by ${newBookObj[i].author}
            <button type='button' class="removeButton">Remove</button>
          </td>`;

        div[i].innerHTML = template[i];
        list.appendChild(div[i]);
      }
    }
  }

  static saveToLocal() {
    const bookArray = [];

    localStorage.setItem('bookContent', JSON.stringify(bookArray));
  }

  add() {
    const bookContentArray = JSON.parse(JSON.stringify(localStorage.getItem('bookContent')));
    const newBookContentArray = JSON.parse(bookContentArray);

    const myBookObject = {
      title: this.title,
      author: this.author,
    };

    newBookContentArray.push(myBookObject);
    localStorage.setItem('bookContent', JSON.stringify(newBookContentArray));
    BookObject.setContent();
  }

  static remove(btn, key) {
    btn.addEventListener('click', () => {
      const setBookContentR = JSON.parse(JSON.stringify(localStorage.getItem('bookContent')));
      const newBookObjR = JSON.parse(setBookContentR);
      if (key === 0) {
        newBookObjR.splice(key, key + 1);
      } else {
        newBookObjR.splice(key, key);
      }

      localStorage.setItem('bookContent', JSON.stringify(newBookObjR));
      BookObject.setContent();
      window.location.reload();
    });
  }
}

export default BookObject;