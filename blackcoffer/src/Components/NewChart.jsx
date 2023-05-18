import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
const NewChart = () => {
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
    <div >
        <h1 style={{color:"blueviolet",width:"80%"}}>Line Chart Presentation</h1>
        <Line data={Data}/>
    </div>
  )
}

export default NewChart