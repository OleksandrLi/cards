import React from "react";
import ErrorsBoundary from "../shared/errors/ErrorsBoundary";
import Layout from "../shared/layout";

const Routes = () => {
  return (
    <Layout>
      <ErrorsBoundary>
        <div>456</div>
      </ErrorsBoundary>
    </Layout>
  );
};

export default Routes;
