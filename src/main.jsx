import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import React from "react";
import Minecraft from "./mc";
import MinecraftRules from "./mc_rules";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/minecraft">
                <Route index element={<Minecraft />} />
                <Route path="rules" element={<MinecraftRules />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
