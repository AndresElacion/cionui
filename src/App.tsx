import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from './layout/Layout';
import Welcome from "./pages/Welcome";
import Components from "./pages/Components";
import Layout from "./layout/Layout";

const NotFound = () => (
  <h1 className="text-center mt-10">404 - Page Not Found</h1>
);

// Main App Router
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="components" element={<Components />} />

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
