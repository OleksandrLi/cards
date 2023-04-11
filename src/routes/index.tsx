import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Navigation from "../features/home";
import ErrorsBoundary from "../shared/errors/ErrorsBoundary";
import Layout from "../shared/layout";

const CardsRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorsBoundary>
          <Routes>
            <Route path={ROUTES.root} element={<Navigation />} />
            <Route path={ROUTES.home} element={<Navigation />} />
          </Routes>
        </ErrorsBoundary>
      </Layout>
    </BrowserRouter>
  );
};

export default CardsRoutes;
