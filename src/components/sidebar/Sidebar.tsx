// src/components/Sidebar.tsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-full bg-blue-500  text-white p-4 h-full">
      <div className="font-semibold font-serif text-xl  mb-8 italic">
        Contact Manager
      </div>
      <Link to="/">
        <div className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-md">
          Contacts
        </div>
      </Link>
      <Link to="/graph">
        <div className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-md">
          Graph
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;