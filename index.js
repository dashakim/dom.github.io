const nav = document.querySelector('nav')
const container = document.querySelector('.container')
const bookList = document.createElement('UL')
bookList.classList.add('book-list')
nav.appendChild(bookList)
const content = document.createElement('DIV')
content.classList.add('content')
container.appendChild(content)



const createElement = function (data) {
    data.map(function (el) {
        const title = document.createElement('LI')
        title.classList.add('book-item')
        title.dataset.index = data.indexOf(el);
        const name = document.createTextNode(el.author)
        bookList.appendChild(title)
        title.appendChild(name)
    })
}
createElement(storage)

const addContent = function (data) {
    container.innerHTML = `
        <h2>${data.title}</h2>
      <p>${data.about}</p>
      <span> ${data.price}</span>
      <img src="${data.cover}" alt="${data.title}" class="cover-book">
      `
}
addContent(storage[0])

bookList.onclick = function (event) {
    let target = event.target // где был клик?
    if (!target) return;
    if (!bookList.contains(target)) return
    let selected = storage[target.dataset.index];
    addContent(selected)
}
