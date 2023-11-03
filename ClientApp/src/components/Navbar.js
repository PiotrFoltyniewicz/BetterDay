import React, { useRef } from 'react';
import betterDayLogo from '../images/betterDayLogo.png';
import { useAuth } from '../contexts/AuthContext';

function Navbar(props) {
    const { token } = useAuth();
    const navbarRef = useRef();
    const loginButtonRef = useRef();
    const showNavbar = () => {
        navbarRef.current.classList.toggle('visible');
    };

    const handleLogInClick = () => {
        props.setLogPopUp((prev) => !prev);
        showNavbar();
    };

    const handleLoginEnter = (event) => {
        if (event.key === 'Enter') {
            loginButtonRef.current.click();
        }
    };

    return (
        <header className="header">
            <div className="navbar--top">
                <a className="navbar--name" href="/">
                    <img src={betterDayLogo} alt="Logo" />
                    BetterDay
                </a>
                <button className="navbar--control" onClick={showNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className="navbar" ref={navbarRef}>
                <ul className="navbar--right">
                    <li>
                        <a className="navbar--right--element" href="/home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="navbar--right--element" href="/about">
                            About
                        </a>
                    </li>
                    <li>
                        {token ? (
                            <a className="navbar--right--element" href="/profile">
                                Profile
                            </a>
                        ) : (
                            <span
                                tabIndex="0"
                                className="navbar--right--element"
                                onClick={handleLogInClick}
                                onKeyDown={handleLoginEnter}
                                ref={loginButtonRef}
                            >  
                                Log in
                            </span>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;