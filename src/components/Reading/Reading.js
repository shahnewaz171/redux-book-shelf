import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import { NavLink} from "react-router-dom";
import '../Books/Books.css';

const Reading = () => {
    const books = useSelector((state) => {
        return state.books.readingList;
    });
    console.log(books);

    return (
        <div className="container">
            <div className="row g-0">
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
                                <span className="badge bg-success ms-1">{books.length}</span>
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
                        books?.length ?

                        books?.map((book) => <Book book={book} key={book.id}></Book>) 
                        :
                        <p className="p-4">
                            Looks like you've finished all your books! Check them out in your finished books.
                        </p>

                     }
                </div>
            </div>
        </div>
    );
};

export default Reading;