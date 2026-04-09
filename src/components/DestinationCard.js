import { Link } from "react-router-dom";

function DestinationCard({ place }) {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #334155",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        transition: "transform 0.3s",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={place.image}
        alt={place.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <div style={{ padding: "16px" }}>
        <h3 style={{ color: "#f1f5f9", margin: "0 0 8px" }}>
          {place.name}
        </h3>

        <p style={{ color: "#22c55e", fontWeight: "bold" }}>
          ₹{place.price}
        </p>

        <Link to={`/destination/${place.id}`}>
          <button
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;