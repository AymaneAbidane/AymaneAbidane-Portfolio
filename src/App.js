import "./App.css";
import { Home } from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch as Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
