import  { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Users, FileText, Calendar, Search, Menu, X, Building, Shield, Globe, Heart, Send } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import QuickLinks from './pages/QuickLinks';
import Services from './pages/Services';
import Footer from './pages/Footer';
import Statistic from './pages/Statistic';
import News from './pages/News';
import Contact from './pages/Contact';

export default function GovernmentLanding() {
    






    

    
    
    

    

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />


            {/* Quick Links */}
            <QuickLinks />

            {/* Services Section */}
            <Services />

            {/* News & Announcements */}
            <News/>

            {/* Statistics */}
            <Statistic/>
            

            {/* Contact Section */}
            <Contact/>
            

            {/* Footer */}
            <Footer/>
        </div>
    );
}