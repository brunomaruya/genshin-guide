import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterProfile from "./pages/CharacterProfile";

function App() {
  return (
    <div className="bg-center min-h-screen w-full px-20 py-8">
      <div className="bg-[url('./assets/images/genshin.jpeg')] bg-cover bg-center fixed h-screen w-full top-0 left-0 z-[-3]"></div>
      <div className="fixed inset-0 bg-black opacity-50 z-[-2]"></div>
      <Router>
        <main className="m-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:id" element={<CharacterProfile />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
export default App;
