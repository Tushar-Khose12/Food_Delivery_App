import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <>
            <header>
            <header>
                <div id="brand">
                    Tushar Funnel
                </div>
                <div id="social">
                    <Link to="/" className="btn btn-success">
                        <span className="glyphicon glyphicon-log-in"></span> LogIn
                    </Link> &nbsp;
                    <Link to="/" className="btn btn-danger">
                        <span className="glyphicon glyphicon-user"></span> SignUp
                    </Link>
                </div>
            </header>
            </header>
        </>
    )
};

export default Header;