import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordLock = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password yaha set karo (tum apna change kar sakte ho)
  const correctPassword = "127";

  const handleSubmit = () => {
    if (password === correctPassword) {
      localStorage.setItem("valentineAccess", "true");
      navigate("/home");
    } else {
      setError("❌ Galat Password! bachchuu sirf tum hi enter kar sakti ho 😘");
    }
  };

  return (
    <div className="lock-page">
      <div className="lock-box">
        <h1>🔒 Surprise Website Locked 🔒</h1>
        <p>
          Mera payara bachchaa ❤️  
          is website ka password sirf tumhare liye hai 😘  
        </p>

        <input
          type="password"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="lock-input"
        />

        <button className="love-btn" onClick={handleSubmit}>
          🔓 Unlock Surprise
        </button>

        {error && <p className="error-text">{error}</p>}

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Hint: Mera Favourite Number ❤️
        </p>
      </div>
    </div>
  );
};

export default PasswordLock;
