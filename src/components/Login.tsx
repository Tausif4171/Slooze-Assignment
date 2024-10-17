import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      navigate("/dashboard");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-200 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
