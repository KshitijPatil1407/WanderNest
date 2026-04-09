import { useLocation } from "react-router-dom";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Packages() {
  const query = new URLSearchParams(useLocation().search);
  const destination = query.get("destination");
  const days = query.get("days");

  let filtered = destinations;

  if (destination || days) {
    filtered = destinations.filter((d) => {
      return (
        (!destination ||
          d.name.toLowerCase().includes(destination.toLowerCase())) &&
        (!days || d.days == days)
      );
    });
  }

  return (
    <div>
      <h2 style={{ color: "#f1f5f9", textAlign: "center" }}>
        🌍 Available Packages
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((place) => (
          <DestinationCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default Packages;