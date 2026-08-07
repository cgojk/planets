
import React from "react";
import { Routes, Route } from "react-router-dom";
// import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
// import Home from "./pages/Home";
import Overview from "./components/Overview";
export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}