import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import destinations from "../data/destinations";

function Booking() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  // 🔽 dropdown states
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const location = useLocation();

  // ✅ Auto-fill destination from URL
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

  // ✅ Dropdown filtering
  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    setShowDropdown(true);

    const results = destinations.filter((d) =>
      d.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
  };

  // ✅ Price calculation
  const pricePerPerson = 5000;
  const totalPrice = people ? people * pricePerPerson : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = localStorage.getItem("user");

    if (!user) {
      alert("⚠ Please login first");
      return;
    }

    if (!name || !people || !fromDate || !toDate || !destination) {
      setError("⚠ Please fill all fields");
      return;
    }

    const newBooking = {
      user,
      destination,
      name,
      fromDate,
      toDate,
      people,
      totalPrice,
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    existing.push(newBooking);

    localStorage.setItem("bookings", JSON.stringify(existing));

    setError("");
    alert(" Booking saved successfully!");

    // reset
    setName("");
    setPeople("");
    setFromDate("");
    setToDate("");
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
    <div style={{ animation: "fadeIn 0.6s ease-in" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#f1f5f9" }}> WanderNest</h1>
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
        <h2 style={{ color: "#f1f5f9" }}>Booking Details </h2>

        {/* NAME */}
        <label style={labelStyle}>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        {/* DESTINATION DROPDOWN */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <label style={labelStyle}>Destination</label>

          <input
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter Destination"
            style={inputStyle}
          />

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                width: "100%",
                backgroundColor: "#1e293b",
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
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

        {/* FROM */}
        <label style={labelStyle}>From</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          style={inputStyle}
        />

        {/* TO */}
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
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          style={inputStyle}
        />

        {/* TOTAL PRICE */}
        {people && (
          <p style={{ color: "#22c55e", marginTop: "10px" }}>
            Total Price: ₹{totalPrice}
          </p>
        )}

        {error && <p style={{ color: "#ef4444" }}>{error}</p>}

        <button
          style={{
            padding: "10px",
            backgroundColor: "#16a34a",
            color: "white",
            width: "100%",
            borderRadius: "8px",
            border: "none",
            boxSizing: "border-box",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;