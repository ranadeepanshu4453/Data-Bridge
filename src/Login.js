import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { NotificationContainer,NotificationManager } from "react-notifications";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function check() {
    let credentials = { email, password };
    let result = await fetch("http://personal.test/api/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
    if (!result.ok) {
      alert('Invalid Credentials');
    } else {
      navigate('/dashboard');
    }
  }

  return (
    <div style={{ backgroundImage: 'url("./images/login.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center">
      <div className="flex flex-col w-1/4 mx-auto p-6 border rounded-lg shadow-lg bg-transparent bg-opacity-0 hover:shadow-2xl hover:shadow-gray-300 hover:scale-105 ">
        <h3 className="text-3xl font-semibold text-center mb-6 text-white">Log In</h3>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
        />
        <button className="bg-white text-purple-600 font-semibold text-2xl hover:bg-blue-600 w-full p-2" onClick={check}>
          Log In
        </button>
        <div className="mt-4 text-center">
          <Link to="/register" className="text-blue-500 no-underline text-white">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
