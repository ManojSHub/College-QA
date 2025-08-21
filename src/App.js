import React from "react";
import ReactDOM from "react-dom/client";

//components
import Header from "./components/Header.js";
import Body from "./components/Body.js";



const AppLayout = () => {
  return(
    <div>
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
