import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner' 

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Eco Retreat Odisha</title>
        <meta name="description" content="Get in touch with Eco Retreat Odisha for bookings and inquiries. Explore eco retreats across Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, and Sonapur." />
        <meta name="keywords" content="Contact Eco Retreat Odisha, eco retreat Konark, eco retreat Satkosia, eco retreat Hirakud, eco retreat Bhitarkanika, eco retreat Putsil, eco retreat Daringbadi, eco retreat Sonapur, Odisha eco tourism contact" />
        <link rel="canonical" href="https://ecoretreatodisha.in/contact" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Eco Retreat Odisha",
            "url": "https://ecoretreatodisha.in/contact",
            "telephone": "+91 8743000609",
            "contactType": "Customer Service",
            "description": "Contact Eco Retreat Odisha for bookings and inquiries across eco retreat locations like Konark, Satkosia, Hirakud, Bhitarkanika, Putsil, Daringbadi, and Sonapur."
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Navbar />
      <Contact />
      <Footer />
      <SocialMediaFixed/>
    </>
  )
}

export default ContactPage
