import "./App.css";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <VaccData />
    </div>
  );
}

export default App;
