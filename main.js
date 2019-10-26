const nav = document.querySelector('nav')
const div = document.querySelector('.container')
const list = document.createElement('UL')
nav.appendChild(list)



const addElement = function (storage) {
  storage.map(function (i) {
    const listElement = document.createElement('LI')
    const listTitle = document.createTextNode(i.author)
    listElement.classList.add('book-list')

    // const vi = document.createElement('DIV')
    // vi.classList.add('soned')
    // listElement.appendChild(vi)
    listElement.appendChild(listTitle)
    list.appendChild(listElement)
  })
}
addElement(storage)
// const listElement = document.createElement('LI')
// const listTitle = document.createTextNode(i.title)
// listElement.classList.add('book-list')
// listElement.dataset.index = bookList.indexOf(i)
// listElement.appendChild(listTitle)
// list.appendChild(listElement)
// addElement(storage)

nav.appendChild(list).firstChild.classList.add('active')

const creatContent = function (data) {
  div.innerHTML = `
  <h2>${data.author}</h2>
      <h2>${data.title}</h2>
    <p>${data.about}</p>
    <span> ${data.price}</span>
    <img src="${data.cover}" alt="${data.title}" class="cover-book">
    `
}
creatContent(storage[0])
// function color(){
//   this.style.color="red";
//   }
  
//   var mas =document.getElementsByTagName("LI");
//   for(i=0; i<mas.length;i++)
//   mas[i].addEventListener("click", color, false);
      

// // creatContent(storage[0])

// // const changeText = function () {
// //   for (let i = 0; i < storage.length; i++) {
// //     addElement(storage[i])
// //   }

// // }


  nav.addEventListener('click', function(event){
    let navElement = event.target;

    if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
    }
    if (navElement.tagName != 'LI') {
        return;
    }
    navElement.classList.add('active');
      creatContent(storage[i])
  
    })
  




