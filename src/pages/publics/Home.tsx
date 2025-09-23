import { useEffect } from 'react'
import feather from 'feather-icons'

import Hero from '../../components/HomePage/sections/Hero'
import Feutures from '../../components/HomePage/sections/Feutures'
import Dashboard from '../../components/HomePage/sections/Dashboard'

import Testimonials from '../../components/HomePage/sections/Testimonial'
import CTA from '../../components/HomePage/sections/CTA'
import Footer from '../../components/HomePage/sections/Footer'



const HomePage = () => {
    useEffect(() => {
        // Vanta background
        const vantaEffect = window.VANTA.NET({
            el: "#vanta-bg",
            color: 0x667eea,
            backgroundColor: 0xf8fafc,
            points: 12,
            maxDistance: 20,
            spacing: 15,
        });


        // Feather icons
        feather.replace();


        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);


    return (
        <div className="font-sans antialiased text-gray-800">
            {/* Vanta background */}
            <div id="vanta-bg" className="fixed inset-0 -z-10 opacity-20"></div>
            {/* Hero section */}
            <Hero />
            {/* Feutures Section */}
            <Feutures />
            {/* Dashboard Preview */}
            <Dashboard />
            {/* Testimonials */}
            <Testimonials />
            {/* CTA section */}
            <CTA />
            {/* footer section */}
            <Footer />
        </ div>
    )
}

export default HomePage