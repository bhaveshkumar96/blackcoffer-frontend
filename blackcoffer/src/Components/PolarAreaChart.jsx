import React, { useEffect, useState } from "react";
import axios from "axios";
import { PolarArea } from "react-chartjs-2";
const PolarAreaChart = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://blackcoffer-backend-production-3ed6.up.railway.app/data")
      .then((res) => {
        setDataa(res.data)
        //console.log(res.data)
    })
      .catch((err) => console.log(err));
  };
  const labels = dataa.map((el)=>{
      return  el.topic 
    });
    const Data = {
      labels: labels,
      datasets: [
        {
          label: "Based on intensity",
          backgroundColor:"green",
          borderColor: "rgb(255, 99, 132)",
          data: dataa.map((el)=>{
              return  el.intensity 
            }),
        },
        {
          label: "Based on relevance",
          backgroundColor:"blue",
          borderColor: "rgb(75, 192, 192)",
          data: dataa.map((el)=>{
              return  el.relevance 
            }),
        },
        {
          label: "Based on likelihood",
          backgroundColor:"red",
          borderColor: "rgb(201, 203, 207)",
          data: dataa.map((el)=>{
              return  el.likelihood 
            }),
        },
      ],
    };
  return (
    <div>
    <h1 style={{color:"blueviolet",width:"80%"}}>Polar area Chart Presentation</h1>
 <PolarArea data={Data} />
</div>
  )
}

export default PolarAreaChart