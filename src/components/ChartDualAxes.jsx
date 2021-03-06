import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DualAxes } from "@ant-design/charts";

const ChartDualAxes = ({ chartValue }) => {
  const [data, setDataList] = useState([]);
  useEffect(() => {
    let result = [];
    for (let key in chartValue) {
      const obj = {
        type: key,
        人數: chartValue[key],
        count: chartValue[key],
      };
      result.push(obj);
    }
    setDataList(result);
  }, [chartValue]);

  const config = {
    data: [data, data],
    xField: "type",
    yField: ["人數", "count"],
    color: "#fff",
    legend: {
      itemName: {
        style: {
          fill: "#ddd",
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: "#ddd",
        },
      },
    },
    xAxis: {
      label: {
        style: {
          fill: "#ddd",
        },
      },
    },
    geometryOptions: [
      {
        geometry: "column",
      },
      {
        geometry: "line",
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default ChartDualAxes;
