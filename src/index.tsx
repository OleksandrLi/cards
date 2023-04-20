import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import CardsRoutes from "./routes";
import ThemeLayout from "./shared/theme";

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <CardsRoutes />
    </ThemeLayout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
