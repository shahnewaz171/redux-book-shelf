import React from 'react';
import './Books.css';

const Books = () => {
    return (
        <div className="container">
           <div className="row">
                <div className="col-md-3 books">
                    <ul className="list-group">
                        <li className="list-group-item discover">Discover</li>
                        <li className="list-group-item">
                            Reading List
                            <span className="badge bg-success ms-1">0</span>
                        </li>
                        <li className="list-group-item">
                            Finished Books
                            <span className="badge bg-success ms-1">0</span>
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
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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