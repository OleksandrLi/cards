import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

const App: React.FC = () => {
  return <Routes />;
};

ReactDOM.render(<App />, document.getElementById("root"));
