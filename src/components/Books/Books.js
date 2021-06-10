import React from 'react';
import './Books.css';

const Books = () => {
    return (
        <div className="container">
           <div className="row">
                <div className="col-md-3 books">
                    <ul class="list-group">
                        <li class="list-group-item discover">Discover</li>
                        <li class="list-group-item">
                            Reading List
                            <span class="badge bg-success ms-1">0</span>
                        </li>
                        <li class="list-group-item">
                            Finished Books
                            <span class="badge bg-success ms-1">0</span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-9">
                     <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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