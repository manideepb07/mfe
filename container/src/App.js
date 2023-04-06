import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingAppComponent from "./components/marketingapp.component";
import Header from "./components/header.component";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header />
            <MarketingAppComponent />
          </div>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};
