import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate

function Navbar() {
  const navigate = useNavigate(); // ✅ added

  const user = localStorage.getItem("user"); // ✅ added

  const handleLogout = () => { // ✅ added
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#0f172a",
    borderBottom: "1px solid #1e293b",
    color: "white",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const centerStyle = {
    display: "flex",
    gap: "20px",
  };

  const rightStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center", // ✅ added (for alignment)
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  return (
    <div style={navStyle}>
      {/* 🌍 LOGO */}
      <div style={leftStyle}>
        🌍 WanderNest
      </div>

      {/* 🔗 NAV LINKS */}
      <div style={centerStyle}>
        <Link to="/" style={linkStyle}>🏠 Home</Link>
        <Link to="/booking" style={linkStyle}>📅 Booking</Link>
        <Link to="/packages" style={linkStyle}>🎒 Packages</Link>
        <Link to="/history" style={linkStyle}>📜 History</Link>
      </div>

      {/* 🔐 LOGIN */}
      <div style={rightStyle}>
        {user ? (
          <>
            <span style={{ fontSize: "0.9rem" }}>👤 {user}</span>
            <button
              onClick={handleLogout}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#ef4444",
                color: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* ✅ LOGIN BUTTON (existing) */}
            <button
              onClick={() => navigate("/login")}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            {/* 🔥 NEW SIGNUP BUTTON */}
            <button
              onClick={() => navigate("/signup")}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#22c55e",
                color: "white",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;