import { Link, useNavigate } from "react-router-dom";

function DestinationCard({ place }) {
  const navigate = useNavigate();

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
        <h3 style={{ color: "#f1f5f9" }}>{place.name}</h3>

        <p style={{ color: "#22c55e", fontWeight: "bold" }}>
          ₹{place.price}
        </p>

        {/* View Details */}
        <Link to={`/destination/${place.id}`}>
          <button
            style={{
              marginTop: "10px",
              padding: "8px",
              width: "100%",
            }}
          >
            View Details
          </button>
        </Link>

        {/* ✅ BOOK NOW BUTTON */}
        <button
          onClick={() =>
            navigate(`/booking?destination=${place.name}`)
          }
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;