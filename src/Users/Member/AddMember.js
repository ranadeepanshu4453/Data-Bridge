import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate();

  async function addMember() {
    let items = { name, email, phone };
    let result = await fetch("http://personal.test/api/addMembers", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (result.ok) {
      alert("success");
      navigate('/members');

    } else {
      alert("error");
    }

    result = await result.json();
    console.warn(result);
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-3 bg-white rounded-lg shadow-md">
  <Link to="/members">
    <svg
      className="w-8 h-8 mb-6 text-blue-500 hover:text-blue-600 transition duration-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <polyline
        points="244 400 100 256 244 112"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
      <line
        x1="120"
        y1="256"
        x2="412"
        y2="256"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
    </svg>
  </Link>
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Add New Member
  </h2>

  <div className="mb-4">
    <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
      Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
      Email
    </label>
    <input
      id="email"
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-600 font-medium mb-2" htmlFor="phone">
      Phone
    </label>
    <input
      id="phone"
      type="text"
      placeholder="Enter Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
    />
  </div>

  <button
    onClick={addMember}
    className="w-full bg-blue-500 text-white font-medium p-3 rounded-lg hover:bg-blue-600 transition duration-200"
  >
    Add Member
  </button>
</div>

    </Layout>
  );
};

export default AddMember;
