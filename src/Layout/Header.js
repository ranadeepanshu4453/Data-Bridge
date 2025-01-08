import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
 async function logout(){
  let response = await fetch('/http://personal.test/api/logout');
  if(!response.ok){
    alert("Error While Logout");
  }else{
    navigate('/');
  } 
  }
  async function fetchUser(){
    let response = await fetch('/http://personal.test/api/logout');
    if(!response.ok){
      alert("Error While Logout");
    }else{
      navigate('/');
    } 
    }
  return (
    <div className="flex justify-between items-center shadow-md p-3 bg-white w-full">
      {/* <h3 className='ml-4'>LOGO</h3> */}
      <input
        type="search"
        placeholder="Search"
        className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
        aria-label="Search"
      />
      <span className="flex items-center mr-5 gap-3">
        <img
          src="./images/valley.jpg"
          alt="Profile of Deepanshu Chauhan"
          className="rounded-full shadow-md w-10 h-10 m-2"
        />
        <h5 className="text-lg font-semibold ">Deepanshu Chauhan</h5>
        <button onClick={logout} className=' border-2 border-blue-600 p-1 rounded-md text-blue-600 shadow-md hover:shadow-blue-600'>Logout</button>
      </span>
    </div>
  );
};

export default Header;
