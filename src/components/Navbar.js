import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginBottom: "30px",
        padding: "15px",
        borderBottom: "1px solid #334155",
      }}
    >
      <Link to="/" style={{ color: "#f1f5f9", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/booking" style={{ color: "#f1f5f9", textDecoration: "none" }}>
        Booking
      </Link>
      <Link to="/packages" style={{ color: "#f1f5f9", textDecoration: "none" }}>
        Packages
      </Link>
    </div>
  );
}

export default Navbar;