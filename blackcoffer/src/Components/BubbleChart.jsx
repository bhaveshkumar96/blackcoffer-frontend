import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bubble } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
const BubbleChart = () => {
      const [dataa, setDataa] = useState([]);
    useEffect(() => {
      getData();
    }, []);
    const getData = () => {
      axios
        .get("https://blackcoffer-backend-production-3ed6.up.railway.app/data?page=1&limit=10")
        .then((res) => {
          setDataa(res.data.data)
          //console.log(res.data)
      })
        .catch((err) => console.log(err));
    };
    const labels = dataa.map((el)=>{
        return  el.source 
      });
      const Data = {
        labels: labels,
        datasets: [
          {
            label: "Based on intensity",
            backgroundColor:"green",
            borderColor: "black",
            data: dataa.map((el)=>{
                return  el.intensity 
              }),
          },
          {
            label: "Based on relevance",
            backgroundColor:"blue",
            borderColor: "black",
            data: dataa.map((el)=>{
                return  el.relevance 
              }),
          },
          {
            label: "Based on likelihood",
            backgroundColor:"red",
            borderColor: "black",
            data: dataa.map((el)=>{
                return  el.likelihood 
              }),
          },
        ],
      };
  return (
<div
      style={{
        width: "50%",
        border: "1px solid pink",
        margin: "auto",
        padding: "0px 50px 0px 50px",
        borderRadius: "5%",
        marginTop: "50px",
      }}
    >
         <h1 style={{color:"blueviolet",width:"100%"}}>Bubble Chart Presentation</h1>
      <Bubble data={Data} />
    </div>
  )
}

export default BubbleChart