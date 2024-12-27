import React, { useState, useEffect } from 'react';
import '../css/hero.css';

import Konark from '../assets/hero/konark.jpg';
import Satkosia from '../assets/hero/satkosia.jpg';
import Bhitarkanika from '../assets/hero/bhitarkanika.jpg';
import Daringbadi from '../assets/hero/daringbadi.jpg';
import Hirakud from '../assets/hero/hirakud.jpg';
import Sonapur from '../assets/hero/sonapur.jpg';
import Putsil from '../assets/hero/putsil.jpg';

const Hero = () => {
    const images = [Konark, Satkosia, Putsil, Sonapur, Daringbadi, Hirakud, Bhitarkanika];
    const places = ['Konark', 'Satkosia', 'Putsil', 'Sonapur', 'Daringbadi', 'Hirakud', 'Bhitarkanika'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState(places);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Update image and text every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        if (searchInput === '' || places.includes(searchInput)) {
            setFilteredPlaces([]); // Hide suggestions if the input matches a place or is empty
        } else {
            const filtered = places.filter((place) =>
                place.toLowerCase().includes(searchInput.toLowerCase()) // Filter places based on input
            );
            setFilteredPlaces(filtered);
        }
    }, [searchInput]);

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value); // Update search input
    };

    const handleLocationSelect = (location) => {
        setSearchInput(location); // Set the input to selected location
        setFilteredPlaces([]); // Hide suggestions
    };

    return (
        <div className="hero-section">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                }}
            >
                <div className="overlay">
                    <div className="hero-container">
                        <div className="hero-container-left">
                            <h1>Book Your</h1>
                            <h1 className="slide-text">
                                Eco Retreat <span key={currentIndex}>{places[currentIndex]}</span>
                            </h1>
                            <div className="search-destination-container">
                                <div className="search-destination-texts">
                                    <span>Nature</span>
                                    <span>Eco-Friendly</span>
                                    <span>Serene</span>
                                    <span>Eco-Tourism</span>
                                </div>
                                <p className="search-destination-description">Adventure Meets Culture at Odisha's Eco Haven.</p>
                                <div className="search-destination-search">
                                    <input
                                        type="text"
                                        value={searchInput}
                                        onChange={handleSearchChange}
                                        placeholder="Type Location..."
                                    />
                                    <button>Explore</button>
                                    {/* Show suggestions when input does not match a valid place */}
                                    {searchInput && filteredPlaces.length > 0 && (
                                        <ul className="suggestions-list">
                                            {filteredPlaces.map((place) => (
                                                <li
                                                    key={place}
                                                    onClick={() => handleLocationSelect(place)} // Select a location
                                                >
                                                    {place}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="hero-container-right">
                            {/* Additional content if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
