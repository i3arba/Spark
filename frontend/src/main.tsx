import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/fonts.css";
import "./index.css";
import { ThirdwebProvider } from "thirdweb/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);