import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import SearchPage from "./pages/SearchPage";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import DestinationDetails from "./pages/DestinationDetails";
import History from "./pages/History";
import Login from "./pages/Login";import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  // 🔥 Loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // ✅ Show loader first
  if (loading) return <Loader />;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HashRouter>
        {/* 🔝 NAVBAR */}
        <Navbar />

        {/* 📄 MAIN CONTENT */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            paddingTop: "40px",
          }}
        >
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/packages" 
              element={
                <ProtectedRoute>
                <Packages />
                </ProtectedRoute>
              } 
            />

             <Route 
              path="/booking" 
              element={
                <ProtectedRoute>
                <Booking />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/history" 
              element={
                <ProtectedRoute>
                <History />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>

        {/* 🌍 FOOTER */}
        <footer
          style={{
          backgroundColor: "#0f172a",
          color: "white",
          padding: "20px",
          marginTop: "20px",
        }}
      >

        <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h3>WanderNest</h3>
          <p>Plan your perfect trip with ease ✈️</p>
        </div>

     {/* SOCIAL LINKS */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <span style={{ margin: "10px" }}>📞 Contact: +91 98765 43210</span>
        <br />
          <span style={{ margin: "10px" }}>📧 Email: support@wandernest.com</span>
        </div>

        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <span style={{ margin: "10px" }}>📸 Instagram</span>
          <span style={{ margin: "10px" }}>📘 Facebook</span>
          <span style={{ margin: "10px" }}>🐦 Twitter</span>
        </div>

        <div style={{ textAlign: "center", fontSize: "0.8rem" }}>
          © 2026 WanderNest Pvt. Ltd. All rights reserved.
        </div>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;