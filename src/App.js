import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterProfile from "./pages/CharacterProfile";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/images/genshin.jpeg')] bg-cover bg-center fixed h-screen w-full top-0 left-0 z-[-3]"></div>
      <div className="fixed inset-0 bg-black opacity-50 z-[-2]"></div>
      <Router>
        <Link to="/">
          <img src={logo} className="inline h-6 m-6 " />
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<CharacterProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
