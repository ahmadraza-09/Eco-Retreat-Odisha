import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/eco-retreat.css";
import ecoRetreatData from "../data/eco-retreats-data"; // Import the ecoRetreatData

const EcoRetreat = () => {
    // const { Konark } = ecoRetreatData; // Destructure the Konark data
    const { location } = useParams();
    // const { name, location, images, rooms, cottages, activities, howToReach, topAttractions } = Konark;
    const retreatData = ecoRetreatData[location];

    const {
        name,
        location: retreatLocation,
        images,
        rooms,
        cottages,
        activities,
        howToReach,
        topAttractions,
    } = retreatData;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Update image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="eco-retreat-section">
            {/* Hero Section */}
            <div className="eco-retreat-hero">
                <div
                    className="eco-retreat-background-image"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`, // Use the images from Konark data
                    }}
                ></div>
                <div className="eco-retreat-hero-overlay">
                    <h1>Eco Retreat <span>{location}</span></h1>
                    <h4>Experience luxury glamping in serene <span>{location}</span>!</h4> {/* You can replace this with a subtitle if you have one */}
                </div>
            </div>

            {/* Welcome Section */}
            <div className="eco-retreat-welcome">
                <h4>Welcome To</h4>
                <h1>Eco Retreat <span>{location}</span></h1>
                <p>
                    Luxury by the beach - A serene escape for solitude lovers.
                </p>
            </div>

            {/* Rooms Section */}
            <div className="eco-retreat-rooms">
                {rooms.map((room, index) => (
                    <div className={`eco-retreat-room-card eco-retreat-room-card${index + 1}`} key={index}>
                        <img src={room.images[0]} alt={room.name} />
                        <div className="eco-retreat-room-card-content">
                            <h3>{room.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cottages Section */}
            <div className="eco-retreat-explore-cottage">
                <h2>Discover {location} Cottages</h2>
                <div className="eco-retreat-explore-cottage-container">
                    {/* Displaying the Explore Image */}
                    <div className="eco-retreat-explore-cottage-container-left">
                        <img src={cottages[0].exploreImages} alt="Explore Konark Cottages" />
                    </div>

                    <div className="eco-retreat-explore-cottage-container-right">
                        {cottages.slice(1).map((cottage, index) => (
                            <div className="eco-retreat-explore-cottage-container-right-box" key={index}>
                                <div className="eco-retreat-explore-cottage-container-right-box-left">
                                    <img src={cottage.icon} alt={cottage.name} />
                                </div>
                                <div className="eco-retreat-explore-cottage-container-right-box-right">
                                    <h4>{cottage.name}</h4>
                                    <p>{cottage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Activities Section */}
            <div className="eco-retreat-activities">
                <h4>ACTIVITIES</h4>
                <h2>Relish an Action-Packed Escape.</h2>
                <br />
                <div className="eco-retreat-activities-container">
                    {activities.map((activity, index) => (
                        <div className="eco-retreat-activities-box" key={index}>
                            <img src={activity.icon} alt={activity.name} /> {/* Display activity icon */}
                            <br />
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* How to Reach Section */}
            <div className="eco-retreat-how-to-reach">
                <h4>Destination</h4>
                <h2>How to Reach {location}</h2>
                <br />
                <div className="eco-retreat-how-to-reach-container">
                    <div className="eco-retreat-how-to-reach-container-left">
                        <img src={howToReach.destinationImage} alt="Destination" />
                    </div>
                    <div className="eco-retreat-how-to-reach-container-right">
                        <div className="travel-info">
                            {howToReach.byAir && (
                                <div className="travel-section">
                                    <h3>By Air</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Airport</th>
                                                <th>Distance</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{howToReach.byAir.airport}</td>
                                                <td>{howToReach.byAir.distance}</td>
                                                <td>{howToReach.byAir.time}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {howToReach.byRail && (
                                <div className="travel-section">
                                    <h3>By Rail</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Railway Station</th>
                                                <th>Distance</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {howToReach.byRail.map((station, index) => (
                                                <tr key={index}>
                                                    <td>{station.station}</td>
                                                    <td>{station.distance}</td>
                                                    <td>{station.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {howToReach.byRoad && (
                                <div className="travel-section">
                                    <h3>By Road</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>City</th>
                                                <th>Kilometers</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {howToReach.byRoad.map((city, index) => (
                                                <tr>
                                                    <td>{city.city}</td>
                                                    <td>{city.distance}</td>
                                                    <td>{city.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Eco Retreat Attractions */}
            <div className="eco-retreat-attractions">
                <h4>Attractions</h4>
                <h2>Top Attractions in {location}</h2>
                <br />
                <div className="eco-retreat-attractions-container">
                    {topAttractions.map((attraction, index) => (
                        <div className="eco-retreat-attractions-box" key={index}>
                            <img src={attraction.image} alt={attraction.name} />
                            <div className="eco-retreat-attractions-box-content">
                                <h3>{attraction.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default EcoRetreat;
