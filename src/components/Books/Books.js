import React from 'react';
import { Link} from "react-router-dom";
import './Books.css';

const Books = () => {
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
                     <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Books;