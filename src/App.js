import { Routes, Route } from "react-router-dom";


import PasswordLock from "./pages/PasswordLock";
import HomePage from "./pages/HomePage";
import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import PromiseDay from "./pages/PromiseDay";
import ValentineDay from "./pages/ValentineDay";
import ChocolateDay from "./pages/ChocolateDay";
import KissDay from "./pages/KissDay";
import HugDay from "./pages/HugDay";
import TeddyDay from "./pages/TeddyDay";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
      <Routes>
        {/* First page will be Password Lock */}
        <Route path="/" element={<PasswordLock />} />

        {/* Home page is protected */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* All other pages protected */}
        <Route
          path="/rose-day"
          element={
            <ProtectedRoute>
              <RoseDay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/promise-day"
          element={
            <ProtectedRoute>
              <PromiseDay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chocolate-day"
          element={
            <ProtectedRoute>
              <ChocolateDay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teddy-day"
          element={
            <ProtectedRoute>
              <TeddyDay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kiss-day"
          element={
            <ProtectedRoute>
              <KissDay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hug-day"
          element={
            <ProtectedRoute>
              <HugDay />
            </ProtectedRoute>
          }
        />

        <Route
          path="/propose-day"
          element={
            <ProtectedRoute>
              <ProposeDay />
            </ProtectedRoute>
          }
        />

        <Route
          path="/valentine-day"
          element={
            <ProtectedRoute>
              <ValentineDay />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}

export default App;
