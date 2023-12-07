import React from "react";
import { Layout } from "antd";
import Card from "../../components/card/Card";
import "./Dashboard.css";
const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  return (
    <Layout className="layout">
      <div className="demo-logo" />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <p>Main Dashboard</p>
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
      </Content>
    </Layout>
  );
};
export default Dashboard;
