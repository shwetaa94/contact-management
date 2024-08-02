// src/components/Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-blue-500 text-white p-4 h-full">
      <div className="font-semibold font-serif text-xl mb-8 italic">
        Contact Manager
      </div>
      <Link to="/">
        <div
          className={`p-2 rounded-md ${
            location.pathname === "/"
              ? "bg-blue-100 text-blue-500"
              : "bg-blue-500 text-white"
          }`}
        >
          Contacts
        </div>
      </Link>
      <Link to="/graph">
        <div
          className={`p-2 rounded-md ${
            location.pathname === "/graph"
              ? "bg-blue-100 text-blue-500"
              : "bg-blue-500 text-white"
          }`}
        >
          Graph
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
