import React from "react";
import logo from '../../images/LadyRedDressWalkingDog.jpg';

function Nav() {
    const navcontent = [
        "Home",
        "About Us",
        "Mobile Services",
        "La Fetching Pooch's Social Media",
        "Contact Us"
    ];

    return (
        <header className="container bg-blue font-white">
            <a href="/" className="biz-container font-white no-a-style">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="business-title font-sm">
                    La Fetching Pooch
                </h1>
            </a>
            <ul className="container nav-ul">
                {navcontent.map((content) => (
                    <li className="font-sm no-li-style nav-links"><span className="li-span">{content}</span></li>
                ))}
            </ul>
        </header>
    );
};

export default Nav;