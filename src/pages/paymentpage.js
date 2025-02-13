import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import Payment from '../components/payment';
import SocialMediaFixed from '../components/socialmedia-fixed';

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment - Secure Your Booking at Eco Retreat Odisha</title>
                <meta name="description" content="Make secure payments for your bookings at Eco Retreat Odisha & Resorts. Enjoy a seamless payment process for hotel reservations, with multiple payment options available for your convenience." />
                <meta name="keywords" content="Eco Retreat Odisha payment, secure hotel payment, hotel reservation payment, online hotel payment, payment options for hotel bookings, Eco Retreat Odisha payment gateway, hotel payment processing, easy hotel payment methods" />
                <link rel="canonical" href="https://ecoretreatodisha.in/payment" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Payment - Eco Retreat Odisha",
                        "telephone": "+91-9971834101",
                        "url": "https://ecoretreatodisha.in/payment"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<Payment />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PaymentPage
