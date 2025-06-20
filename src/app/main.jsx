import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import { BrowserRouter } from "react-router";
import "./styles/main.css";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </StrictMode>
);
