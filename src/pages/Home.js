import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Home() {
  return (
    <div>
      <h2
        style={{
          color: "#f1f5f9",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        🌍 Popular Destinations
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {destinations.map((place) => (
          <DestinationCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default Home;