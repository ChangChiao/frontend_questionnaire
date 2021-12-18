import React, { useState, useEffect } from "react";
import { Bar } from "@ant-design/charts";

const ChartBarH = ({ chartValue }) => {
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
    console.log("34343", result);
    setDataList(result);
  }, [chartValue]);

  const config = {
    data,
    xField: "value",
    yField: "type",
    seriesField: "type",
    xAxis: {
      label: {
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
    color: ({ type }) => {
      return type === "26~30 歲" ? "#FAAD14" : "#5B8FF9";
    },
    legend: false,
  };
  return <Bar {...config} />;
};

export default ChartBarH;
