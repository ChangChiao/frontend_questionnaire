import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

const ChartLine = ({ chartValue }) => {
  const [data, setDataList] = useState([]);
  useEffect(() => {
    let result = [];
    for (let key in chartValue) {
      const obj = {
        type: key,
        value: chartValue[key],
      };
      result.push(obj);
    }
    setDataList(result);
    console.log("result====", chartValue);
  }, [chartValue]);
  const config = {
    data,
    xField: "type",
    yField: "value",
    label: {
      style: {
        fill: "#ccc",
      },
    },
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 4,
      },
    },
    tooltip: {
      showMarkers: false,
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
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };
  return <Line {...config} />;
};

export default ChartLine;
