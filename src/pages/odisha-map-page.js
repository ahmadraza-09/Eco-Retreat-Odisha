import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import OdishaMap from '../components/odisha-map'

const OdishaMapPage = () => {
  return (
    <>
      <Helmet>
        <title>Eco Retreat Odisha - Luxury Camping Experience in Odisha</title>
        <meta name="description" content="Explore Eco Retreat Odisha for luxury glamping experiences at Konark, Satkosia, Bhitarkanika, Daringbadi, Hirakud, Sonapur, and Putsil. Experience nature, adventure, and culture like never before." />
        <meta name="keywords" content="Eco Retreat Odisha, Konark Eco Retreat, Satkosia glamping, Bhitarkanika eco camp, Daringbadi tourism, Hirakud luxury camping, Sonapur eco tourism, Putsil adventure retreat, Odisha glamping, luxury tents in Odisha, eco tourism Odisha, nature retreats Odisha, Odisha adventure tourism" />
        <link rel="canonical" href="https://ecoretreatodisha.in" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            "name": "Eco Retreat Odisha",
            "url": "https://ecoretreatodisha.in",
            "telephone": "+91 8743000609",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Odisha",
              "addressCountry": "IN"
            },
            "description": "Eco Retreat Odisha offers a luxurious eco-friendly glamping experience amidst Odisha's breathtaking natural beauty and cultural heritage.",
            "amenities": [
              "Luxury Tents",
              "Adventure Activities",
              "Cultural Performances",
              "Eco-Friendly Practices",
              "Fine Dining",
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <OdishaMap/>
      <Footer/>
    </>
  )
}

export default OdishaMapPage
