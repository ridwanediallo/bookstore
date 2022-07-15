import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksData, deleteBook } from '../redux/books/bookSlice';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const booksKey = Object.keys(books);

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);

  return (
    <div className="container booklists">
      <ul className="list-group">
        {booksKey.map((key) => {
          const book = books[key];

          const { category, author, title } = book[0];

          return (
            <Row key={key}>
              <li className="list-item">
                <Col xs="6">
                  <div className="left">
                    <p className="book-category">{category}</p>
                    <h3 className="book-title">{title}</h3>
                    <p className="book-author">{author}</p>
                    <div className="btns">
                      <button className="book-btn" type="button">
                        Comment
                      </button>
                      |
                      <button
                        className="book-btn"
                        type="button"
                        onClick={() => dispatch(deleteBook(key))}
                      >
                        Remove
                      </button>
                      |
                      <button className="book-btn" type="button">
                        Edit
                      </button>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="progress-container">
                    <div className="circular-progress-container">
                      <div className="circular-progress" />
                    </div>

                    <div className="progress-stat">
                      <p className="percent-complete">0%</p>
                      <p className="completed">Completed</p>
                    </div>

                    <div className="progress-divider" />
                    <div className="current-chapter-container">
                      <div>
                        <p className="current-chapter-label">CURRENT CHAPTER</p>
                        <p className="current-chapter">Introduction</p>
                      </div>
                      <div>
                        <button className="progress-btn" type="button">
                          UPDATE PROGRESS
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </li>
            </Row>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
