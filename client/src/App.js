import "./App.css";
import RecentData from "./BottomLeft/RecentData";
import VaccData from "./BottomLeft/VaccData";
import TitleBanner from "./TitleBanner/titleBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import PopularTweets from "./BottomLeft/PopularTweets";

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <VaccData />
      <RecentData/>
      <PopularTweets/>
    </div>
  );
}

export default App;
