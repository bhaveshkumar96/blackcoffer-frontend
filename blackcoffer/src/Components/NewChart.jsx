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
            label: "My First dataset",
            backgroundColor:"pink",
            borderColor: "black",
            data: dataa.map((el)=>{
                return  el.intensity 
              }),
          },
        ],
      };
  return (
    <div >
        <Line data={Data}/>
    </div>
  )
}

export default NewChart