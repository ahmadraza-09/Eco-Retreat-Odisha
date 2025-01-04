import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import About from '../components/about'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Eco Retreat Odisha</title>
        <meta name="description" content="Discover Eco Retreat Odisha, your gateway to sustainable luxury stays across scenic locations like Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, and Sonapur. Experience nature like never before." />
        <meta name="keywords" content="Eco Retreat Odisha, eco retreat Konark, eco retreat Satkosia, eco retreat Hirakud, eco retreat Bhitarkanika, eco retreat Putsil, eco retreat Daringbadi, eco retreat Sonapur, sustainable tourism Odisha, luxury eco retreats" />
        <link rel="canonical" href="https://ecoretreatodisha.in/about" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Eco Retreat Odisha",
            "url": "https://ecoretreatodisha.in/about",
            "telephone": "+91 8743000609",
            "description": "We provide booking for eco retreats in Odisha across beautiful locations like Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, and Sonapur.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Odisha",
              "addressCountry": "India"
            }
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Navbar />
      <About />
      <Footer />
      <SocialMediaFixed/>
    </>
  )
}

export default AboutPage
