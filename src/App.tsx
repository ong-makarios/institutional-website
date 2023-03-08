import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Navbar />
      <Router />
    </BrowserRouter>
  </div>
);

export default App;
