import Sidebar from "../components/sidebar/Sidebar";
import ContactList from "../components/contacts/ContactList";

const Home = () => {
  return (
    <div className="w-[100%] flex h-screen">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-full">
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
