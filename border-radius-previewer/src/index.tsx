import React from "react";
import { createRoot } from "react-dom/client";
import BorderRadiusPreviewer from "./components/BorderRadiusPreviewer";
import "./styles/style.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BorderRadiusPreviewer />
  </React.StrictMode>
);
