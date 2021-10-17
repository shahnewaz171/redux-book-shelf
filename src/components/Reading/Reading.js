import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import '../Books/Books.css';
import { useDispatch } from 'react-redux';
import { removeBookFromReadingList } from '../../redux/allSlice/bookSlice';

const Reading = () => {
    const { readingList, finishedList } = useSelector((state) => {
        return state.books;
    });

    const dispatch = useDispatch();

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
                                <span className="badge bg-success ms-1">{readingList.length}</span>
                            </li>
                        </NavLink>
                        <NavLink to="/finished-books" activeClassName="discover">
                            <li className="list-group-item">
                                Finished Books
                                <span className="badge bg-success ms-1">{finishedList.length}</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="col-md-9">
                    {
                        readingList?.length ? readingList.map((book) => {
                            return (
                                <div key={book.id} className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4 book-img">
                                            <img src={book.coverImageUrl} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{book.title}</h4>
                                                <h6>{book.author}</h6>
                                                <p className="card-text">{book.synopsis.slice(0, 500)}...</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span onClick={() => dispatch(removeBookFromReadingList(book))} className="add-discover position-absolute top-50 start-100 translate-middle px-2 bg-primary border border-light rounded-circle">
                                                <span>-</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <p className="p-4">
                                Looks like you've finished all your books! Check them out in your finished books or discover .
                            </p>

                    }
                </div>
            </div>
        </div>
    );
};

export default Reading;