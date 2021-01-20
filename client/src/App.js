import "./App.css";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMap from "./Map/map";

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <MainMap />
      <VaccData />
    </div>
  );
}

export default App;
