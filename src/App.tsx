import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Graph from "./pages/Graph";
import Create from "./pages/Create";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
