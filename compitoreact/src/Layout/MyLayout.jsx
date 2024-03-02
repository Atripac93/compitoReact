import React from "react";
import Navigation from "./Nav/Navigation";
import EndPage from "./Footer/EndPage";

const MyLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <EndPage />
    </div>
  );
};

export default MyLayout;
