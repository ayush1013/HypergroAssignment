import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <div className="flex items-center">
        <Link to="/" ><span className="text-white text-2xl font-bold">Play Lister</span></Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/creators" className="text-white">Creators</Link>
        <Link to="/videos" className="text-white">All Videos</Link>
      </div>
    </div>
  );
};

export default Navbar;