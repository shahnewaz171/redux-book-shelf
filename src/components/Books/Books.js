import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import Book from '../Book/Book'
import './Books.css';

const Books = () => {
    const books = useSelector((state) => {
        return state.books.discoverList;
    });
    console.log(books);

    return (
        <div className="container">
           <div className="row">
                <div className="col-md-3 books">
                    <ul className="list-group">
                        <NavLink to="/" exact activeClassName="discover">
                            <li className="list-group-item">
                                Discover
                            </li>
                        </NavLink>
                    
                        <NavLink to="/reading-books" activeClassName="discover">
                            <li className="list-group-item">
                                Reading List
                                <span className="badge bg-success ms-1">0</span>
                            </li>
                        </NavLink>
                        <NavLink to="/finished-books" activeClassName="discover">
                            <li className="list-group-item">
                                Finished Books
                                <span className="badge bg-success ms-1">0</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="col-md-9">
                    {
                        books.map(book => <Book book={book} key={book.id}></Book> )
                    }
                </div>
           </div>
        </div>
    );
};

export default Books;