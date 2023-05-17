import "./constants/socket";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CardsRoutes from "./routes";
import ThemeLayout from "./shared/theme";
import store from "./store";
import GlobalStyle from "./theme/styles";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <GlobalStyle />
        <CardsRoutes />
      </ThemeLayout>
    </Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
