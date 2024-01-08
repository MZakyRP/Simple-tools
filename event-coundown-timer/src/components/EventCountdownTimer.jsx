import { Route, Routes } from "react-router-dom";
import { getThemeValue } from "../contexts/themeContext";
import ThemeProvider from "../contexts/themeContext";
import HomePage from "../pages/HomePage";
import NewPage from "../pages/NewPage";
import PageHeader from "../components/PageHeader";

function EventCountdownTimer() {
  const themeValue = getThemeValue();

  return (
    <ThemeProvider value={themeValue}>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default EventCountdownTimer;
