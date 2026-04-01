import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

// localStorage.clear();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ToastContainer
  position="top-center"
        autoClose={3000}
        pauseOnHover
        closeOnClick
        draggable
        theme="dark"
      />

      <AuthProvider>
        <App />
      </AuthProvider>
    </>
  </StrictMode>,
);
