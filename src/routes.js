import React from "react";
import { Route, Routes as RouteContainer } from "react-router-dom";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Creative from "./components/Creative";
// import Test from "./components/Test";
import QnaComponent from "./components/QnaComponent";
import { Link } from "react-router-dom";

const AppRoutes = () => {
  return (
    <RouteContainer>
      <Route path="/" element={<Creative />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/qna" element={<QnaComponent />} />
    </RouteContainer>
  );
};

export default AppRoutes;
