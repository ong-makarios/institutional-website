import React from "react";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => (
  <div className="container px-8 lg:px-96">
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);

export default App;
