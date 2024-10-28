import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterProfile from "./pages/CharacterProfile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<CharacterProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
