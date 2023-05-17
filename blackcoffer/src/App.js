import "./App.css";
import BarChart from "./Components/BarChart";
import { Navbar } from "./Components/Navbar";
import NewChart from "./Components/NewChart";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BarChart/> */}
      <NewChart/>
      <BarChart/>
    </div>
  );
}

export default App;
