import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";

//import "./styles.css";

const App = () => {
    return (
      <div className="App">
        <div class="container-fluid" className="container-fluid">
          <Navbar />
          <Home />
        </div>
      </div>
    );
};

export default App;
