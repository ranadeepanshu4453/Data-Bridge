import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let items = { name, password, email };
    let result = await fetch("http://personal.test/api/register", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (result.ok) {
      alert("Registration successful");
      navigate('/login');
    } else {
      alert("Registration failed");
    }
  }

  return (
    <div style={{ backgroundImage: 'url("./images/register.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="flex items-center justify-start ml-32 min-h-screen bg-gray-100 bg-opacity-0">
        <div className="bg-transparent backdrop-blur-md bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col items- gap-6 mt-32 hover:scale-105">
          <h2 className="text-3xl font-semibold mb-6 text-center text-white">Register</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full p-2 border border-gray-300 text-white rounded focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full p-2 border border-gray-300 text-white rounded focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full p-2 border border-gray-300 text-white rounded focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
              required
            />
          </div>
          <button
            onClick={signUp}
            className="w-full bg-white text-purple-600 font-semibold text-xl p-2 hover:bg-blue-600 transition mt-4"
          >
            Register
          </button>
          <Link to="/login" className="text-center text-white no-underline">Already have an account? Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
