import React from "react";
import "./style.css";
import Banner from '../img/banner_index.png';

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}
  <img src= {Banner} alt="banner"/>
   </div>;

}

export default Jumbotron;
