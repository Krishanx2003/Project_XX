import CTA from "../components/ui/CTA/CTA";
import Card from "../components/ui/Cards/Card";

import Features from "../components/ui/Features/Features";
import Footer from "../components/ui/Footer/Footer";
import Hero from "../components/ui/Hero/Hero";
import Mentor from "../components/ui/Mentors/Mentors";
import Navbar from "../components/ui/Navbar/Navbar";


export default function Home() {
    return (
      <>
      <Navbar />
    <Hero />
    <Features />
    <CTA />
    <Card />
    <Mentor />
   
    <Footer />
    
    
    </>
    );
    }