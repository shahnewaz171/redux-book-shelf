import React from 'react';
import { useSelector } from 'react-redux';
import { Link} from "react-router-dom";
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
                        <li className="list-group-item discover">
                            <Link to="#">Discover</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">
                                Reading List
                                <span className="badge bg-success ms-1">0</span>
                            </Link>
                            
                        </li>
                        <li className="list-group-item">
                            <Link to="#">
                                Finished Books
                                <span className="badge bg-success ms-1">0</span>
                            </Link>
                        </li>
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