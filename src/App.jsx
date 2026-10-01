import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBanner from "./components/TrustBanner";
import HomeCarePlans from "./components/HomeCarePlans";
import HowItWorks from "./components/HowItWorks";
import Care360Plans from "./components/Care360Plans";

// New plan detail pages
import EssentialDetail from "./components/EssentialDetail";
import PremiumDetail from "./components/PremiumDetail";
import Complete360Detail from "./components/Complete360Detail";
import Care360Testimonials from "./components/Care360Testimonials";
import BookYourService from "./components/BookYourService";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import HomeCarePlansPage from "./components/HomeCarePlansPage";
import ScrollToTop from "./components/ScrollToTop";

/* =========================================================
   EXISTING HOME PAGE
   Nothing changes here.
========================================================= */

function HomePage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <TrustBanner />
      <HomeCarePlans />
      <Care360Plans />
      <HowItWorks />
      <Care360Testimonials />
      <BookYourService />
      <Footer />
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* Existing website */}
        <Route path="/" element={<HomePage />} />

        {/* Plan detail pages */}
        <Route path="/plans/essential" element={<EssentialDetail />} />

        <Route path="/plans/premium" element={<PremiumDetail />} />

        <Route path="/home-care-plans" element={<HomeCarePlansPage />} />

        <Route path="/plans/complete-360" element={<Complete360Detail />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
