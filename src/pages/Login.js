import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!username) {
      setError("⚠ Enter username");
      return;
    }

    localStorage.setItem("user", username);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 style={{ color: "white" }}>Login</h2>

      <form onSubmit={handleLogin} style={{ maxWidth: "300px", margin: "auto" }}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;