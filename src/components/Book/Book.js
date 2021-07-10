import React from 'react';

const Book = (props) => {
    const {title, author, coverImageUrl, synopsis} = props.book;
    
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={coverImageUrl} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h6>{author}</h6>
                        <p className="card-text">{synopsis}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;