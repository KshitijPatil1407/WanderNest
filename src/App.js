import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import Packages from "./pages/Packages";
import DestinationDetails from "./pages/DestinationDetails";
import Booking from "./pages/Booking";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        fontFamily: "Poppins, sans-serif",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // ✅ pushes footer down
      }}
    >
      <BrowserRouter>
        {/* 🔝 NAVBAR */}
        <Navbar />

        {/* 📄 MAIN CONTENT */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>

        {/* 🌍 FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "12px",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: "0.9rem",
            borderRadius: "10px",
            margin: "10px 20px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          © 2026 WanderNest Pvt. Ltd. All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;