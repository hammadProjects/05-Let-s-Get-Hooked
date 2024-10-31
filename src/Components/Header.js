import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <h3>logo</h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;