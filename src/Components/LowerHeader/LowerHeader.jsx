import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import "./LowerHeader.css";

function LowerHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
    <div className="header__bottom">
        <nav className="header__bottom-nav">
        {/* Mobile Menu Icon */}
        <div className="header__menu-icon" onClick={toggleMenu}>
            <IoMenuSharp size={18} />
        </div>

        {/* Navigation Links */}
        <ul className={`header__bottom-links ${isMenuOpen ? "open" : ""}`}>
            <li>All</li>
            <li>Medical Care</li>
            <li>Best Sellers</li>
            <li>Prime</li>
            <li>Amazon Basics</li>
            <li>New Releases</li>
            <li>Music</li>
            <li>Today's Deals</li>
            <li>Groceries</li>
            <li>Customer Service</li>
            <li>Amazon Home</li>
            <li>Pharmacy</li>
            <li>Registry</li>
        </ul>
        </nav>
    </div>
    );
}

export default LowerHeader;

