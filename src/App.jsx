
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./components/Overview";
import Structure from "./components/Structure";
import Surface from "./components/Surface";
export default function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
  
        <Route path="/" element={<Navigate to="/mercury/overview" replace />} 
        />

        {/* Planet pages */}
        <Route path="/:planetName/overview" element={<Overview />} />
        <Route path="/:planetName/structure" element={<Structure />} />
        <Route path="/:planetName/surface" element={<Surface />} />

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}