import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username) {
      setError("⚠ Enter username");
      return;
    }

    // get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check duplicate
    const exists = users.find((u) => u === username);

    if (exists) {
      setError("⚠ Username already exists");
      return;
    }

    // save new user
    users.push(username);
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Signup successful! Please login");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 style={{ color: "white" }}>Sign Up</h2>

      <form onSubmit={handleSignup} style={{ maxWidth: "300px", margin: "auto" }}>
        <input
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button style={{ padding: "10px", width: "100%" }}>
          Sign Up
        </button>
      </form>

      <p style={{ color: "white", marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "#2563eb", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;