import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const Members = () => {
  const [members, setMembers] = useState([]);

  // Fetch members data when the component mounts
  useEffect(() => {
    const getMembersData = async () => {
      try {
        const response = await fetch("http://personal.test/api/members");
        if (!response.ok) {
          throw new Error("Members data not found");
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getMembersData();
  }, []); // Empty dependency array to run only on mount

  // Delete member function
  const deleteMember = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://personal.test/api/deleteMembers/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setMembers(members.filter((member) => member.id !== id));
        alert("Member deleted successfully");
      } else {
        throw new Error("Error deleting member");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Layout>
        <div className="w-full h-full p-6">
          <div className="flex justify-end mb-4">
            <Link to="/addMembers">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200">
                Add Member
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto shadow rounded-md bg-white">
            <table className="w-full border-collapse text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-gray-600 font-medium border-b border-gray-300">
                    Name
                  </th>
                  <th className="p-2 text-gray-600 font-medium border-b border-gray-300">
                    Email
                  </th>
                  <th className="p-2 text-gray-600 font-medium border-b border-gray-300">
                    Phone
                  </th>
                  <th className="p-2 text-gray-600 font-medium border-b border-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.length > 0 ? (
                  members.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition">
                      <td className="p-2 border-b border-gray-300">
                        {member.name}
                      </td>
                      <td className="p-2 border-b border-gray-300">
                        {member.email}
                      </td>
                      <td className="p-2 border-b border-gray-300">
                        {member.phone}
                      </td>
                      <td className="p-2 border-b border-gray-300 flex items-center gap-2">
                      <Link to={`/viewMembers/${member.id}`}>
                          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                            View
                          </button>
                        </Link>
                        <Link to={`/editMembers/${member.id}`}>
                          <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete this member?"
                              )
                            ) {
                              deleteMember(member.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-2 text-center text-gray-500 border-b border-gray-300"
                    >
                      No members found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Members;
