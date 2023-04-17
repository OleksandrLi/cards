import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import HomePage from "../pages/HomePage";
import LessonSettingsPage from "../pages/LessonSettingsPage";
import WordPage from "../pages/WordPage";
import ErrorsBoundary from "../shared/errors/ErrorsBoundary";
import Layout from "../shared/layout";

const CardsRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorsBoundary>
          <Routes>
            <Route path={ROUTES.root} element={<HomePage />} />
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route
              path={ROUTES.dynamic.wordsSettings()}
              element={<LessonSettingsPage />}
            />
            <Route path={ROUTES.dynamic.wordsCard()} element={<WordPage />} />
            <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
          </Routes>
        </ErrorsBoundary>
      </Layout>
    </BrowserRouter>
  );
};

export default CardsRoutes;
