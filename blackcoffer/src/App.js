import "./App.css";
import BarChart from "./Components/BarChart";
import BubbleChart from "./Components/BubbleChart";
import { Navbar } from "./Components/Navbar";
import NewChart from "./Components/NewChart";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BarChart/>
      <NewChart/>
     <BubbleChart/>
    </div>
  );
}

export default App;
