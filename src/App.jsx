import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BasicState from "./pages/BasicState";
import GetUser from "./pages/GetUser";
import Textinput from "./pages/Textinput";

import HomeP from "./components/HomeP";
import AboutP from "./components/AboutP";
import InfoP from "./components/InfoP";
import NoteFind from "./components/NoteFind";

function App() {
  return (
    <>
      <div>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/info">INFO</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/about" element={<AboutP />} />
          <Route path="/info" element={<InfoP />} />
          <Route path="*" element={<NoteFind />} />
        </Routes>
      </div>
      {/* <BasicState /> */}
      {/* <Textinput /> */}
      {/* <GetUser /> */}
    </>
  );
}

export default App;
