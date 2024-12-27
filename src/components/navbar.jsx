import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [navbarSection, setNavbarSection] = useState(false);

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
                <li>Location</li>
                <li>Gallery</li>
                <li>Contact Us</li>
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
