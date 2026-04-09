import { useParams } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();
  const place = destinations.find((d) => d.id == id);

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "auto",
        backgroundColor: "#1e293b",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <img
        src={place.image}
        alt={place.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2 style={{ color: "#f1f5f9" }}>{place.name}</h2>

      <p style={{ color: "#22c55e", fontSize: "18px" }}>
        ₹{place.price}
      </p>

      <p style={{ color: "#cbd5f5" }}>
        📅 {place.days} Days / {place.nights} Nights
      </p>

      <div
        style={{
          marginTop: "15px",
          padding: "15px",
          backgroundColor: "#0f172a",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#f1f5f9" }}>🗺️ Itinerary</h3>
        <p style={{ color: "#94a3b8" }}>{place.itinerary}</p>
      </div>
    </div>
  );
}

export default DestinationDetails;