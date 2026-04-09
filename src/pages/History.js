import { useEffect, useState } from "react";

function History() {
  const [bookings, setBookings] = useState([]);

  const user = localStorage.getItem("user"); // ✅ added

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];

    // ✅ filter bookings for logged-in user
    const filtered = user
      ? data.filter((b) => b.user === user)
      : [];

    setBookings(filtered);
  }, [user]);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>📜 Booking History {user && `- ${user}`}</h2> {/* ✅ added */}

      {!user ? ( // ✅ added
        <p>Please login to view your bookings</p>
      ) : bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, i) => (
          <div
            key={i}
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#1e293b",
              borderRadius: "8px",
            }}
          >
            <p><b>Name:</b> {b.name}</p>
            <p><b>From:</b> {b.fromDate}</p>
            <p><b>To:</b> {b.toDate}</p>
            <p><b>People:</b> {b.people}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default History;