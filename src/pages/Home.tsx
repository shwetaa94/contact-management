import Sidebar from "../components/sidebar/Sidebar";
import ContactList from "../components/ContactList";

const Home = () => {
  return (
    <div className="w-[100%] flex h-screen">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-full">
        <ContactList contacts={[]} />
      </div>
    </div>
  );
};

export default Home;
