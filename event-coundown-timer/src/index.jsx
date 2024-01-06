import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import EventCountdownTimer from "./components/EventCountdownTimer";
import "./style/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EventCountdownTimer />
  </BrowserRouter>
);
