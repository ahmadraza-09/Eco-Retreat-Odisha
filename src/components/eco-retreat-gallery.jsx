import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/eco-retreat.css";
import "../css/eco-retreat-gallery.css";
import ecoRetreatData from "../data/eco-retreats-data";

const EcoRetreatGallery = () => {
    const { location } = useParams();
    const retreatData = ecoRetreatData[location] || { images: [] }; // Fallback to prevent conditional hooks

    const { name, images } = retreatData;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [images.length]);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const prevSlide = () => {
        setModalIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setModalIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (!retreatData.images.length) {
        return <div>Location not found or no images available.</div>;
    }

    return (
        <section className="eco-retreat-section">
            {/* Hero Section */}
            <div className="eco-retreat-hero">
                <div
                    className="eco-retreat-background-image"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                    }}
                ></div>
                <div className="eco-retreat-hero-overlay">
                    <h1>
                        Eco Retreat Gallery <span>{location}</span>
                    </h1>
                    <h4>
                        Discover <span>{location}</span> Odisha's Eco Retreat through our gallery.
                    </h4>
                </div>
            </div>

            {/* Gallery Images */}
            <div className="eco-retreat-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Eco Retreat ${name} ${index + 1}`}
                        className="gallery-thumbnail"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {/* Modal for Fullscreen Image */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                        <button className="modal-prev" onClick={prevSlide}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <img
                            src={images[modalIndex]}
                            alt={`Eco Retreat ${name} Fullscreen`}
                            className="modal-image"
                        />
                        <button className="modal-next" onClick={nextSlide}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default EcoRetreatGallery;
