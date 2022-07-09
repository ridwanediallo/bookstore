import React from 'react';

const BookList = ({ books }) => {
  console.log(books);
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className='list'>
          <span>
            {book.title} {book.author}
          </span>
          <button style={{marginLeft: '50px'}}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
