const Sidebar = () => {
  return (
    <div className="w-full bg-blue-500  text-white p-4 h-full">
      <div className="font-semibold font-serif text-xl  mb-8 italic">
        Contact Manager
      </div>
      <div className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-md">
        Contacts
      </div>
      <div className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-md">
        Graph
      </div>
    </div>
  );
};

export default Sidebar;
