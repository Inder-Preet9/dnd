import React, { useState } from "react";

function Login({ setToken, closeDropdown }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Call the App callback with BOTH token and username
      setToken(data.token, data.username);

      setMessage("Login successful!");
      if (closeDropdown) closeDropdown();
    } else {
      setMessage(data.error || "Login failed");
    }
  } catch (err) {
    console.error(err);
    setMessage("Server error. Try again.");
  }
};



  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Login;
