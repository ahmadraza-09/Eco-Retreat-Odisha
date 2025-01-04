import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import EcoRetreatGallery from '../components/eco-retreat-gallery'
import { useParams } from 'react-router-dom'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const EcoRetreatGalleryPage = () => {
  const { location } = useParams(); // Fetch location from route params

  const galleryTitle = location
    ? `Eco Retreat Gallery - ${location.charAt(0).toUpperCase() + location.slice(1)}`
    : 'Eco Retreat Gallery - Explore Stunning Locations in Odisha';

  const galleryDescription = location
    ? `Explore the beauty of the eco retreat at ${location.charAt(0).toUpperCase() + location.slice(1)} through our curated gallery. Discover nature's best moments.`
    : 'Explore the breathtaking beauty of eco retreat locations in Odisha including Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, and Sonapur.';

  return (
    <>
      <Helmet>
        <title>{galleryTitle}</title>
        <meta name="description" content={galleryDescription} />
        <meta name="keywords" content="Eco retreat gallery, eco retreat locations, eco tourism, Odisha nature retreats, eco retreat photos" />
        <link rel="canonical" href={`https://ecoretreatodisha.in/eco-retreat-gallery/${location || ''}`} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": galleryTitle,
            "url": `https://ecoretreatodisha.in/eco-retreat-gallery/${location || ''}`,
            "description": galleryDescription,
            "keywords": "Eco retreat gallery, eco retreat locations, eco tourism, Odisha nature retreats, eco retreat photos"
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Navbar />
      <EcoRetreatGallery />
      <Footer />
      <SocialMediaFixed/>
    </>
  );
}

export default EcoRetreatGalleryPage;
