import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./Discussion.scss";
import Datatable from "../../components/datatable/Datatable";

const Discussion = () => {
  return (
    <div className="discussion">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Discussion;
