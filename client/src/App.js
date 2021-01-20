import "./App.css";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return <div className="App">
    <VaccData/>
    <RecentData/>
  </div>;
}

export default App;
