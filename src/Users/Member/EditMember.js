import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const response = await fetch(`http://personal.test/api/editMembers/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching member data");
        }
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
      } catch (error) {
        alert(error.message);
      }
    };

    getMemberData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://personal.test/api/updateMembers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) {
        throw new Error("Error updating member");
      }

      alert("Member updated successfully");
      navigate("/members");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
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
    Edit Member
  </h2>

  <form onSubmit={handleUpdate}>
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
        required
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
        required
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
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white font-medium p-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Update Member
    </button>
  </form>
</div>

      </Layout>
    </div>
  );
};

export default EditMember;
