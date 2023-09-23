import React, { Link } from "react"
function Navbar()
{
    return (
        <nav className="navbar">
            <a className="navbar--name" href="/">
                <img src="" alt="Logo"></img>
                BetterDay
            </a>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/login">Profile</a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;