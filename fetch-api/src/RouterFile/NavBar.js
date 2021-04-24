import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-link active">
                            <Link to="/"> App </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/functionalAPI"> Functional API </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/classLevelAPI"> Class level API </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >

    )
}

export default Navbar