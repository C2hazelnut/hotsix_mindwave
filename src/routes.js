import React from "react";
import { Route, Routes as RouteContainer } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Creative from "./components/Creative";
import TestStartPage from "./components/TestStratPage";
import { Link } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <RouteContainer>
      <Route path="/" element={<Creative />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/teststartpage" element={<TestStartPage />} />
    </RouteContainer>
  );
};

export default AppRoutes;
