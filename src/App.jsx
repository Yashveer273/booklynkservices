import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Services,
  Connect,
  Featured,
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
              <Featured />
              <Connect />
              <Contact />
              <FeedbackSection />
              
              <Footer />
              <HomeButton />
            </>
          } />
           <Route path="/pricing-plan" element={
            <>
               <Navbar />
             <PricingPlan />
            </>
          } />
        
         
          <Route path="/dashboard-page" element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
