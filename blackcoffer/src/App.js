import "./App.css";
import BarChart from "./Components/BarChart";
import BubbleChart from "./Components/BubbleChart";
import DoughtnutChart from "./Components/DoughtnutChart";
import { Navbar } from "./Components/Navbar";
import NewChart from "./Components/NewChart";
import PolarAreaChart from "./Components/PolarAreaChart";
import RadarChart from "./Components/RadarChart";
import ScatterChart from "./Components/ScatterChart";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BarChart/>
      {/* <NewChart/> */}
     {/* <BubbleChart/> */}
    
     <PolarAreaChart/>
     {/* <RadarChart/> */}
     {/* <ScatterChart/> */}
     <DoughtnutChart/>
    </div>
  );
}

export default App;
