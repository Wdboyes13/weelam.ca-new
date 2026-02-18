import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";

import License from "./mit_license";
import App from "./main_site/App";
import Minecraft from "./minecraft/mc";
import MinecraftRules from "./minecraft/mc_rules";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/minecraft">
                <Route index element={<Minecraft />} />
                <Route path="rules" element={<MinecraftRules />} />
            </Route>
            <Route path="/site_license" element={<License />} />
        </Routes>
    </BrowserRouter>,
);
