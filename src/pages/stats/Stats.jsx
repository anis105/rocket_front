import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Stats.scss";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    mean: 4000,
    Your_grade: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    mean: 3000,
    Your_grade: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    mean: 2000,
    Your_grade: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    mean: 2780,
    Your_grade: 3908,
    amt: 2000,
  },
  {
    name: "May",
    mean: 1890,
    Your_grade: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    mean: 2390,
    Your_grade: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    mean: 3490,
    Your_grade: 4300,
    amt: 2100,
  },
];

const Stats = ({ aspect }) => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="Container">
        <Navbar />
        <div className="report">
          <div className="left">
            <div className="top">
              <h1 className="title">Average grade in Fall 2023</h1>
            </div>
            <div className="bottom">
              <div className="bar">
                <CircularProgressbar value={90} text={"90%"} strokeWidth={2} />
              </div>
              <p className="title">Average assignment grade this week</p>
              <div className="description">
                <div className="summary">
                  <p>ENPM611</p>
                  <p>^</p>
                  <p>96%</p>
                </div>
                <div className="summary">
                  <p>CMSC447</p>
                  <p>^</p>
                  <p>79%</p>
                </div>
                <div className="summary">
                  <p>ENPM613</p>
                  <p>^</p>
                  <p>90%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Your_grade"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="mean"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
