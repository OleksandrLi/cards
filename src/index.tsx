import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import CardsRoutes from "./routes";

const App: React.FC = () => {
  return <CardsRoutes />;
};

ReactDOM.render(<App />, document.getElementById("root"));
