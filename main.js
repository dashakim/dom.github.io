const nav = document.querySelector('nav')
const div = document.querySelector('.container')
const list = document.createElement('UL')
nav.appendChild(list)

const storage = [
  {
    author: 'Brian Tracy',
    title: 'Eat That Frog',
    about: 'Want to do more than just get more done? How about get what matters done so that you are making quantum leaps in your business? This book makes too much sense and has changed the way I plan and prioritize my day.  Put it this way, I eat my frog in the morning, and I focus on the top three things that only I can do in my business a whole lot more.  Excellent read! (thanks Tonya Davidson for recommending).',
    price: '$18.69 Hardcover',
    cover: 'src/book_frog.jpg'
  },
  // {
  //   author: "Chris Brogan and Julien Smith",
  //   title: 'The Impact Equation by Chris Brogan and Julien Smith',
  //   about: 'This is not another just another social media book but rather a book about connections and relationships. I always enjoy what Chris and Julien have to say and this book did not disappoint.  They have a way of writing that makes you feel like they totally get you, and are talking with you.  This was the perfect complement to Trust Agents which I also really enjoyed.',
  //   price: '$5.89 Hardcover',
  //   cover: 'src/book_impact.jpg'
  // },
  {
    author: "Carol S. Dweck",
    title: 'Mindset: The New Psychology of Success',
    about: 'After decades of research, world-renowned Stanford University psychologist Carol S. Dweck, Ph.D., discovered a simple but groundbreaking idea: the power of mindset. In this brilliant book, she shows how success in school, work, sports, the arts, and almost every area of human endeavor can be dramatically influenced by how we think about our talents and abilities. People with a fixed mindset — those who believe that abilities are fixed — are less likely to flourish than those with a growth mindset — those who believe that abilities can be developed. Mindset reveals how great parents, teachers, managers, and athletes can put this idea to use to foster outstanding accomplishment.',
    price: '$10.26 Paperback',
    cover: 'src/book_mindset.jpg'
  },
  {
    author: "Mortimer J. Adler, Charles Van Doren",
    title: 'How to Read a Book: The Classic Guide to Intelligent Reading',
    about: 'How to Read a Book, originally published in 1940, has become a rare phenomenon, a living classic. It is the best and most successful guide to reading comprehension for the general reader. And now it has been completely rewritten and updated. You are told about the various levels of reading and how to achieve them – from elementary reading, through systematic skimming and inspectional reading, to speed reading, you learn how to pigeonhole a book, X-ray it, extract the author\'s message, criticize. You are taught the different reading techniques for reading practical books, imaginative literature, plays, poetry, history, science and mathematics, philosophy and social science.',
    price: '$11.99',
    cover: 'src/book_how.jpg'
  },
  {
    author: "Susan Wise Bauer",
    title: 'The Well-Educated Mind: A Guide to the Classical Education You Never Had',
    about: 'Have you lost the art of reading for pleasure? Are there books you know you should read but haven\'t because they seem too daunting? In The Well-Educated Mind, Susan Wise Bauer provides a welcome and encouraging antidote to the distractions of our age, electronic and otherwise. In her previous book, The Well-Trained Mind, the author provided a road map of classical education for parents wishing to home-school their children, and that book is now the premier resource for home-schoolers. In this new book, Bauer takes the same elements and techniques and adapts them to the use of adult readers who want both enjoyment and self-improvement from the time they spend reading.',
    price: '$18.32 Hardcover',
    cover: 'src/book_educated.jpg'
  }
];

const content = document.querySelector('.content')
const nav = document.querySelector('nav')
const bookList = document.createElement('UL')
bookList.classList.add('list')

const addListElements = function (arr) {
  arr.map(function (el) {
    const bookListElement = document.createElement('LI')
    const bookListTitle = document.createTextNode(el.author)

    bookListElement.classList.add('book-list-element');
    bookListElement.dataset.index = arr.indexOf(el);
    bookListElement.appendChild(bookListTitle);
    bookList.appendChild(bookListElement);
  })
};

addListElements(storage);

nav.appendChild(bookList).firstChild.classList.add('active')

const addContent = function (data) {
  content.innerHTML = `
<h2>${data.title}</h2>
<p>${data.about}</p>
<h3>Price: ${data.price}</h3>
<img src="${data.cover}" alt="${data.title}" class="music-img">
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
  let books = storage[navElement.dataset.index];
  addContent(books);
});
