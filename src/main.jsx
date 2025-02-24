import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { LoginProvider } from "./Contexts/Login.jsx";

createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginProvider>
);
