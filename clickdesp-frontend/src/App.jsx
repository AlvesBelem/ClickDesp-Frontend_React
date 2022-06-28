import React from "react";

import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routes/App.routes";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRouters />
    </BrowserRouter>
  );
};

export default App;
