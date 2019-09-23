import React from "react";
import "./App.css";

import Title from "./components/Title/index";
import SearchPanel from "./components/SearchPahel/index";

const App = () => {
  return (
    <div className="wrapper">
      <Title />
      <SearchPanel />
    </div>
  );
};

export default App;
