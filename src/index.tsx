import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
// import io from "socket.io-client";
import CardsRoutes from "./routes";
import ThemeLayout from "./shared/theme";

// const socket = io("http://localhost:3001/");

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <CardsRoutes />
    </ThemeLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
