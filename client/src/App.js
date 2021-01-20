import "./App.css";
import RecentData from "./BottomLeft/RecentData";
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
      <RecentData/>
    </div>
  );
}

export default App;
