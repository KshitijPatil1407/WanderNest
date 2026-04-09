import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import destinations from "../data/destinations";

function SearchPage() {
  const [destination, setDestination] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  // ✅ Auto-fill from URL
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const dest = query.get("destination");
    if (dest) setDestination(dest);
  }, [location]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // 🔍 Handle typing
  const handleChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    setShowDropdown(true);

    const results = destinations.filter((d) =>
      d.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
  };

  // 🚀 Submit
  const handleSearch = (e) => {
    e.preventDefault();

    if (!destination || !fromDate || !toDate) {
      setError("⚠ Please fill all fields");
      return;
    }

    setError("");
    navigate(
      `/packages?destination=${destination}&from=${fromDate}&to=${toDate}`
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
          Discover your next adventure and plan your perfect trip
        </p>
      </div>

      {/* 📋 FORM */}
      <form
        onSubmit={handleSearch}
        style={{
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <h2 style={{ color: "#f1f5f9" }}>Plan Your Trip ✈️</h2>

        {/* DESTINATION */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <label style={labelStyle}>Destination</label>

          <input
            placeholder="Enter Destination"
            value={destination}
            onChange={handleChange}
            style={inputStyle}
          />

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                width: "100%",
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                zIndex: 10,
              }}
            >
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      color: "white",
                    }}
                    onClick={() => {
                      setDestination(item.name);
                      setShowDropdown(false);
                    }}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div style={{ padding: "10px", color: "#94a3b8" }}>
                  ❌ No results found
                </div>
              )}
            </div>
          )}
        </div>

        {/* FROM DATE */}
        <div>
          <label style={labelStyle}>From</label>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* TO DATE */}
        <div>
          <label style={labelStyle}>To</label>

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* ERROR */}
        {error && (
          <p style={{ color: "#ef4444", fontSize: "0.9rem" }}>{error}</p>
        )}

        {/* BUTTON */}
        <button
          style={{
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Search Packages
        </button>
      </form>
    </div>
  );
}

export default SearchPage;