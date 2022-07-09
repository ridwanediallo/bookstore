import React from 'react';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id} className="list">
        <span>
          {book.title}
          {' '}
          {book.author}
        </span>
        <button type="button" style={{ marginLeft: '50px' }}>Remove</button>
      </li>
    ))}
  </ul>
);

export default BookList;
