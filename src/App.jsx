import React from "react";
import { HashRouter } from "react-router-dom";
import HomeHead from "./components/HomeHead";
import RouterView from "./router";

function App() {
  return (
    <HashRouter>
      <HomeHead />
      <div className="content">
        <RouterView />
      </div>
    </HashRouter>
  );
}

export default App;
