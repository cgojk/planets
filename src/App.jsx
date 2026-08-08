
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./components/Overview";
export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/earth" replace />} />
    <Route path="/:planetName" element={<Overview />} />
      
       
      </Route>
    </Routes>
  );
}