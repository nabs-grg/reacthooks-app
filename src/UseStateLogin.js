import React, { useState } from "react";
import "./App.css";
import { login } from "./login";

export const UseStateLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ username, password });
      setUsername("");
      setPassword("");
      setError(false);
      setLoggedIn(true);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <h1>Welcome to dashboard</h1>
          <button onClick={() => setLoggedIn(false)}>Log out</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && "Invalid credentials"}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "logging user" : "Log in"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UseStateLogin;
