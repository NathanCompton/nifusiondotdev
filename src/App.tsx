import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./views/landing";
import { DndHome, DndHealth } from "./views/dnd";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dnd" element={<DndHome />} />
          <Route path="/dnd/health" element={<DndHealth />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
