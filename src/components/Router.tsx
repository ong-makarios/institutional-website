import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import NotFoundPage from "../containers/NotFoundPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
