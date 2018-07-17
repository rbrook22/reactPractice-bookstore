const h = React.createElement;
const books = [
    {title: 'A Tale of Two Cities', author: 'Charles Dickens'},
    {title: 'War and Peace', author: 'Leo Tolstoy'},
    {title: 'The count of Monte Cristo', author: 'Alexandre Dumas'},
];

let main = h('main', null, [
    h('h1', null, 'Bookstore'), 
    h('ul', { className: 'book-list' },
        books.map(book => 
            h('li', null, book.title + ' by ' + book.author)
        )
    ),
    h('footer', null, 'Copyright 2018'),
]);

ReactDOM.render(main, document.querySelector('.react-root'));