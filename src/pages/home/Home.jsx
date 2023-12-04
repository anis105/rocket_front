import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";

import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import Featured from "../../components/featured/Featured";

const Home = ({ type }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <p>DashBoard</p>
        <div className="cardContainer">
          <Card type="1" />
          <Card type="2" />
          <Card type="3" />
          <Card type="4" />
        </div>
        <div className="cardContainer">
          <Card type="5" />
          <Card type="6" />
          <Card type="7" />
          <Card type="8" />
        </div>
        <div className="cardContainer">
          <Card type="9" />
          <Card type="10" />
          <Card type="11" />
          <Card type="12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
