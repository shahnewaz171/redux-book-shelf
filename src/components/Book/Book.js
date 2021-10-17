import React from 'react';
import { useDispatch } from 'react-redux';
import { addToReadingList } from '../../redux/actions/bookActions';

const Book = (props) => {
    const {title, author, coverImageUrl, synopsis} = props.book;

    const dispatch = useDispatch();

    

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 book-img">
                    <img src={coverImageUrl} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h6>{author}</h6>
                        <p className="card-text">{synopsis.slice(0, 500)}...</p>
                    </div>
                </div>
               <div>
                <span onClick={() => dispatch(addToReadingList(props.book))} className="add-discover position-absolute top-50 start-100 translate-middle px-2 bg-primary border border-light rounded-circle">
                    <span>+</span>
                </span>
               </div>
            </div>
        </div>
    );
};

export default Book;