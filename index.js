const bookList = [
    {
        title: "book1",
        description: "Eat That Frog by Brian Tracy",
        about: "Some vonderfull books for children",
        cover: "src/book_frog.jpg"
    },
    {
        title: "book2",
        description: "this book",
        about: "Interesting book for adult",
        cover: "src/book_how.jpg"
    }
]

const div = document.querySelector('.container')
const nav = document.querySelector('nav')

const list = document.createElement('UL')

nav.appendChild(list)

const title = document.createElement('h2')

div.appendChild(title)

const addElement = function (bookList) {
    bookList.map(function (i) {
        const listElement = document.createElement('LI')
        const listTitle = document.createTextNode(i.title)
        listElement.classList.add('book-list')
        listElement.dataset.index = bookList.indexOf(i)
        listElement.appendChild(listTitle)
        list.appendChild(listElement)

        listElement.insertAdjacentHTML("afterbegin", "<div class='some'>text</div>")
      
    })
}

addElement(bookList)

nav.appendChild(list).firstChild.classList.add('active')
const creatContent = function (data) {
    div.innerHTML = `
    <h2>${data.description}</h2>
    <p> ${data.about}</p>
    <img src="${data.cover}" alt="${data.title}" class="cover-book">
    `
}

creatContent(bookList[0])
nav.addEventListener('click', event => {
    let navElement = event.target;

    if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
    }
    if (navElement.tagName != 'LI') {
        return;
    }
    navElement.classList.add('active');
    let bookShop = bookList[navElement.dataset.index];
    creatContent(bookShop);
});
