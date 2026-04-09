import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Booking() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const dest = query.get("destination");
    if (dest) setDestination(dest);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = localStorage.getItem("usser");

    if (!user) {
      alert("⚠ Please login first");
      return;
    }

    if (!name || !people || !fromDate || !toDate) {
      setError("⚠ Please fill all fields");
      return;
    }

    const newBooking = {
      user,
      name,
      fromDate,
      toDate,
      people,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    setError("");
    alert("✅ Booking saved successfully!");
  };

  const inputStyle = {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
    width: "100%",
    backgroundColor: "#0f172a",
    color: "white",
    boxSizing: "border-box",
    outline: "none"
  };

  const labelStyle = {
    color: "#cbd5f5",
    fontSize: "0.9rem",
    marginBottom: "5px",
    display: "block",
  };

  return (
    <div style={{ animation: "fadeIn 0.6s ease-in" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#f1f5f9" }}>🌍 WanderNest</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <h2 style={{ color: "#f1f5f9" }}>Booking Details 📅</h2>

        <label style={labelStyle}>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>From</label>
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>To</label>
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>Number of People</label>
        <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} style={inputStyle} />

        {error && <p style={{ color: "#ef4444" }}>{error}</p>}

        <button style={{ 
          padding: "10px", 
          backgroundColor: "#16a34a", 
          color: "white", 
          width: "100%", 
          borderRadius: "8px",
          border: "none",
          boxSizing: "border-box"
          }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;