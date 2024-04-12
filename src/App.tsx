import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Header />
        <Route path="/" element={<Dashboard />} />
        <Footer />
      </Routes>
    </Router>
  );
}

export default App;
