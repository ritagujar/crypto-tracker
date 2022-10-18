import "./App.css";
import Banner from "./components/Banner/Banner";
import CoinsTable from "./components/CoinsTable/CoinsTable";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CoinsTable />
    </div>
  );
}

export default App;
