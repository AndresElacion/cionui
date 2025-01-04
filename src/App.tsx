import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from './layout/Layout';
import Welcome from "./pages/Welcome";
import Buttons from "./pages/Buttons";
import Layout from "./layout/Layout";
import Cards from "./pages/Cards";
import Accordions from "./pages/Accordions";
import Tables from "./pages/Tables";
import Forms from "./pages/Forms";
import WelcomeLayout from "./layout/WelcomeLayout";
import Components from "./pages/Components";
import Hero from "./pages/Hero";
import CTA from "./pages/CTA";
import FeedbackData from "./pages/FeedbackData";
import FeedbackLayout from "./layout/FeedbackLayout";

const NotFound = () => (
  <h1 className="text-center mt-10">404 - Page Not Found</h1>
);

// Main App Router
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="Components" element={<Components />} />
          <Route path="Buttons" element={<Buttons />} />
          <Route path="Cards" element={<Cards />} />
          <Route path="Accordions" element={<Accordions />} />
          <Route path="Tables" element={<Tables />} />
          <Route path="Forms" element={<Forms />} />
          <Route path="Hero" element={<Hero />} />
          <Route path="Cta" element={<CTA />} />
        </Route>
        
        <Route element={<FeedbackLayout />}>
          <Route path="FeedbackData" element={<FeedbackData />} />
        </Route>

        <Route element={<WelcomeLayout />}>
          <Route path="/" element={<Welcome />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
