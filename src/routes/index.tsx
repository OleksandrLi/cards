import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import HomePage from "../pages/HomePage";
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
            <Route path={ROUTES.dynamic.wordsCard()} element={<WordPage />} />
          </Routes>
        </ErrorsBoundary>
      </Layout>
    </BrowserRouter>
  );
};

export default CardsRoutes;
