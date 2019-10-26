const div = document.querySelector('.container')
const nav = document.querySelector('nav')

const list = document.createElement('UL')

nav.appendChild(list)

const title = document.createElement('h2')

div.appendChild(title)

const addElement = function (storage) {
    storage.map(function (i) {
        const listElement = document.createElement('LI')
        const listTitle = document.createTextNode(i.author)
        listElement.classList.add('book-list')
        listElement.dataset.index = storage.indexOf(i)
        listElement.appendChild(listTitle)
        list.appendChild(listElement)

        listElement.insertAdjacentHTML("afterbegin", "<div class='some'>text</div>")
      
    })
}

addElement(storage)

nav.appendChild(list).firstChild.classList.add('active')
const creatContent = function (data) {
    div.innerHTML = `
    <h2>${data.title}</h2>
    <p> ${data.about}</p>
    <img src="${data.cover}" alt="${data.title}" class="cover-book">
    `
}

creatContent(storage[0])
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
    creatContent(bookShop);
});
