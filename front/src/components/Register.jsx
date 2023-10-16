import React, { useState } from "react";
import { Link } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const userList = [
    { username: "admin", password: "admin" },
    { username: "Tolik", password: "da" },
    { username: "user3", password: "password3" }
  ];

  const handleLogin = () => {
    const user = userList.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      alert("Login successful! 🎉");
    } else {
      setIsLoggedIn(false);
      alert("Invalid credentials! 😔");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    alert("Logged out successfully! 👋");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div id="text-prof">
          <h2>Welcome, {username}!</h2>
          <h2>Your stats:</h2>
        </div>
      ) : (
        <div id="input-auth">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;