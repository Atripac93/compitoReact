import Navigation from "./Nav/Navigation";
import Wellcome from "./Main/Wellcome";
import EndPage from "./Footer/EndPage";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Wellcome />
      <EndPage />
    </div>
  );
};

export default App;
