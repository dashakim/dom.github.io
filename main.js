
const content = document.querySelector('.content')
const  nav = document.querySelector('nav')

const bookList = document.createElement('UL')
bookList.classList.add('list')
//add to our ul  - li
const addListElements = function (arr) {
  arr.map(function (el) {
    const bookListElement = document.createElement('LI')
    const bookListTitle = document.createTextNode(el.title)

    bookListElement.classList.add('book-list-element');
    bookListElement.dataset.index = arr.indexOf(el);
    bookListElement.appendChild(bookListTitle);
    bookList.appendChild(bookListElement);
  })
};
//call to create list of all title 
addListElements(storage);
//add active class to the classList
nav.appendChild(bookList).firstChild.classList.add('active')
//add content to the li
const addContent = function(data){
  content.innerHTML = `
<h2>${data.title}</h2>
<p class="music-price">Price: ${data.price}</p>
<p>${data.description}</p>
<img src="${data.imgPath}" alt="${data.title}" class="music-img">
`
};

addContent(storage[0]);

nav.addEventListener('click', event => {
  let navElement = event.target;

  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active');
  }

  if (navElement.tagName != 'LI') {
    return;
  }

  navElement.classList.add('active');
  let bookShop = storage[navElement.dataset.index];
  addContent(bookShop);
});
