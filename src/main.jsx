import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <ScrollToTop />
        <App />
      </AuthProvider>
    </HashRouter>
  </StrictMode>
);
