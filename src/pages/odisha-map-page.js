import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import OdishaMap from '../components/odisha-map'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner' 

const OdishaMapPage = () => {
  return (
    <>
      <Helmet>
        <title>Odisha Map - Eco Retreat Odisha</title>
        <meta name="description" content="Explore the stunning eco retreat locations in Odisha with our interactive map. Discover Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, Sonapur, and more." />
        <meta name="keywords" content="Odisha eco retreat map, eco retreat Konark, eco retreat Satkosia, eco retreat Hirakud, eco retreat Bhitarkanika, eco retreat Putsil, eco retreat Daringbadi, eco retreat Sonapur, Odisha eco tourism map" />
        <link rel="canonical" href="https://ecoretreatodisha.in/odisha-map" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Map",
            "name": "Odisha Map - Eco Retreat Odisha",
            "url": "https://ecoretreatodisha.in/odisha-map",
            "description": "Explore the stunning eco retreat locations in Odisha with our interactive map. Discover Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, Sonapur, and more.",
            "keywords": "Odisha eco retreat map, eco retreat Konark, eco retreat Satkosia, eco retreat Hirakud, eco retreat Bhitarkanika, eco retreat Putsil, eco retreat Daringbadi, eco retreat Sonapur, Odisha eco tourism map"
          })}
        </script>
      </Helmet>

      <TopBanner/>
      <Navbar />
      <OdishaMap />
      <Footer />
      <SocialMediaFixed/>
    </>
  )
}

export default OdishaMapPage
