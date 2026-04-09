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

  // ✅ Auto-fill destination from Packages
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const dest = query.get("destination");
    if (dest) setDestination(dest);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !people || !fromDate || !toDate || !destination) {
      setError("⚠ Please fill all fields");
      return;
    }

    setError("");
    alert(
      `Booking confirmed for ${name} to ${destination} from ${fromDate} to ${toDate} for ${people} people`
    );
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
    outline: "none",
  };

  const labelStyle = {
    color: "#cbd5f5",
    fontSize: "0.9rem",
    marginBottom: "5px",
    display: "block",
  };

  return (
    <div>
      {/* 🌍 TITLE */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#f1f5f9" }}>🌍 WanderNest</h1>
        <p style={{ color: "#94a3b8" }}>
          Book your dream destination with ease ✈️
        </p>
      </div>

      {/* 📋 FORM */}
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

        {/* NAME */}
        <label style={labelStyle}>Name</label>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        {/* FROM DATE */}
        <label style={labelStyle}>From</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          style={inputStyle}
        />

        {/* TO DATE */}
        <label style={labelStyle}>To</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          style={inputStyle}
        />

        {/* PEOPLE */}
        <label style={labelStyle}>Number of People</label>
        <input
          placeholder="Enter number of people"
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          style={inputStyle}
        />

        {/* ERROR */}
        {error && (
          <p style={{ color: "#ef4444", fontSize: "0.9rem" }}>{error}</p>
        )}

        {/* BUTTON */}
        <button
          style={{
            padding: "10px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;