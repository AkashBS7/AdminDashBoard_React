import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/tobBar/TopBar";

import './app.css';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="others">other Pages</div>
      </div>
    </div>
  );
}

export default App;
