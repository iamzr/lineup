import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
);
