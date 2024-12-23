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

const NotFound = () => (
  <h1 className="text-center mt-10">404 - Page Not Found</h1>
);

// Main App Router
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="accordions" element={<Accordions />} />
          <Route path="tables" element={<Tables />} />
          <Route path="forms" element={<Forms />} />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
