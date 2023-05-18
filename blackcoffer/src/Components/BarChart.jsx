import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Bubble, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import {CategoryScale} from 'chart.js';
// Chart.register(CategoryScale);
const BarChart = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(
        "https://blackcoffer-backend-production-3ed6.up.railway.app/data?page=1&limit=10"
      )
      .then((res) => {
        setDataa(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  const labels = dataa.map((el) => {
    return el.source;
  });
  const Data = {
    labels: labels,
    datasets: [
      {
        label: "Based on intensity",
        backgroundColor: "green",
        borderColor: "black",
        data: dataa.map((el) => {
          return el.intensity;
        }),
      },
      {
        label: "Based on relevance",
        backgroundColor: "blue",
        borderColor: "black",
        data: dataa.map((el) => {
          return el.relevance;
        }),
      },
      {
        label: "Based on likelihood",
        backgroundColor: "red",
        borderColor: "black",
        data: dataa.map((el) => {
          return el.likelihood;
        }),
      },
    ],
  };
  //console.log(dataa)
  return (
    <div
      style={{
      
        padding: "0px 50px 0px 50px",
        borderRadius: "5%",
        margin:"auto",
        marginTop: "50px",
        display:"flex",
        
      }}
    >
      <div style={{width:"50%"}}>
        <h1 style={{ color: "blueviolet", width: "40%" }}>
          Bar Chart Presentation
        </h1>
        <Bar data={Data} />
      </div>
      <div style={{width:"50%"}}>
        <h1 style={{ color: "blueviolet", width: "40%" }}>
          Line Chart Presentation
        </h1>
        <Line data={Data} />
      </div>
    </div>
  );
};

export default BarChart;
