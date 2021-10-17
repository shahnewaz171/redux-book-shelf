import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import './Navbar.css';
import Login from '../Login/Login';
import { useAuth } from '../../utilities/auth';

const Navbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { userInfo, logOut } = useAuth();

    const openModal = () => {
        if(userInfo){
            logOut();
        }
        else{
            setIsOpen(true);
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link to="#" className="navbar-brand fw-bolder">Book<span className="text-primary">Self</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <span className="nav-link active fw-bolder">{userInfo ? userInfo.name || userInfo.email : ""}</span>
                                </li>
                                <li className="nav-item r-out">
                                    <button onClick={openModal} className="btn btn-primary btn-focus">{userInfo ? "Logout" : "Login"}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <Login closeModal={closeModal} />
            </Modal>
        </>
    );
};

export default Navbar;