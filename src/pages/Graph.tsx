import GraphComponent from "../components/graph/GraphComponent";
import Sidebar from "../components/sidebar/Sidebar";

const Graph = () => {
  return (
    <div className="w-[100%] flex h-screen">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-full">
        <GraphComponent  />
      </div>
    </div>
  );
};

export default Graph;
