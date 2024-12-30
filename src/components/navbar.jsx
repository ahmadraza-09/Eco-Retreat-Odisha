import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [navbarSection, setNavbarSection] = useState(false);
    const [dropdown, setDropdown] = useState({ location: false, gallery: false });

    const locations = [
        "Konark",
        "Satkosia",
        "Putsil",
        "Sonapur",
        "Daringbadi",
        "Hirakud",
        "Bhitarkanika",
    ];

    const navbarFixed = () => {
        if (window.scrollY >= 100) {
            setNavbarSection(true);
        } else {
            setNavbarSection(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", navbarFixed);
        return () => window.removeEventListener("scroll", navbarFixed);
    }, []);

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (type) => {
        setDropdown((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <nav
            className={navbarSection ? "navbar-section activated" : "navbar-section"}
        >
            <div className="logo-section">
                <img
                    src={Logo}
                    alt=""
                    className={isActive("/")}
                    onClick={() => {
                        navigate("/");
                        setIsOpen(false);
                    }}
                />
                <h1
                    className={isActive("/")}
                    onClick={() => {
                        navigate("/");
                        setIsOpen(false);
                    }}
                >
                    Eco Retreat <br /> <span>Odisha</span>
                </h1>
            </div>
            <ul className={`menu-section ${isOpen ? "show-menu" : ""}`}>
                <li
                    className={isActive("/")}
                    onClick={() => {
                        navigate("/");
                        setIsOpen(false);
                    }}
                >
                    Home
                </li>
                <li
                    className={isActive("/about")}
                    onClick={() => {
                        navigate("/about");
                        setIsOpen(false);
                    }}
                >
                    About
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => toggleDropdown("location")}
                    onMouseLeave={() => toggleDropdown("location")}
                >
                    Location &nbsp; <i className="fa-solid fa-angle-down"></i>
                    {dropdown.location && (
                        <ul className="dropdown-menu">
                            {locations.map((loc) => (
                                <li
                                    key={loc}
                                    onClick={() => {
                                        navigate(`/eco-retreat-${loc.toLowerCase()}`);
                                        setDropdown({ location: false, gallery: false });
                                        setIsOpen(false);
                                    }}
                                >
                                    {loc}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => toggleDropdown("gallery")}
                    onMouseLeave={() => toggleDropdown("gallery")}
                >
                    Gallery &nbsp; <i className="fa-solid fa-angle-down"></i>
                    {dropdown.gallery && (
                        <ul className="dropdown-menu">
                            {locations.map((loc) => (
                                <li
                                    key={loc}
                                    onClick={() => {
                                        navigate(`/gallery-eco-retreat-${loc.toLowerCase()}`);
                                        setDropdown({ location: false, gallery: false });
                                        setIsOpen(false);
                                    }}
                                >
                                    {loc}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li
                    onClick={() => {
                        navigate("/odisha-map");
                        setIsOpen(false);
                    }}
                >
                    Odisha Map
                </li>
                <li
                    onClick={() => {
                        navigate("/contact");
                        setIsOpen(false);
                    }}
                >
                    Contact Us
                </li>
            </ul>
            <div className="button-section">
                <button>Book Now</button>
                <div className="menu-bars" onClick={toggleMenu}>
                    {isOpen ? (
                        <i className="fa-solid fa-close"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
