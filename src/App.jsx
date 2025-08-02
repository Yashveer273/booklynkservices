import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Services,
  Connect,
  Features,
  FeedbackSection,
  Footer,
  HomeButton,
  Contact
} from "./components";
import PricingPlan from "./components/PricingPlan"; // <-- Make sure this is imported
import Dashboard from "./components/Dashboard"; // <-- Make sure this is imported
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white scroll-smooth">
     
        <Routes>
          <Route path="/" element={
            <>
             <Navbar />
              <Hero />
              <About />
              <Services />
              <Features />
              <Connect />
              <Contact />
              <FeedbackSection />
              
              <Footer />
              <HomeButton />
            </>
          } />
           <Route path="/pricing" element={
            <>
               <Navbar />
             <PricingPlan />
            </>
          } />
        
          <Route path="/#connect" element={<Contact />} />
          
          <Route path="/#about" element={<About />} />
          <Route path="/#services" element={<Services />} />
          <Route path="/#features" element={<Features />} />
          <Route path="/#feedback" element={<FeedbackSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
