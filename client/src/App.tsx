import React from "react";

import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router />
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
